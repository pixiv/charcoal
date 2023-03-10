# `@charcoal-ui/styled` の仕組み

以下、`@charcoal-ui/styled` を省略して styled と称することがある。

```
theme(( o ) => [ (o.bg.background1.hover.press) ] )
  │   │ │        └───────────────────────────────── Internal 型
  │   │ └────────────────────────────────────────── builder（ "o" ）
  │   └──────────────────────────────────────────── spec 関数
  └──────────────────────────────────────────────── theme 関数
```

## 用語集

※ 用語は 2023-03-09 時点のものです。命名に改善の余地はあると思う。

### `theme()` 関数

`@charcoal-ui/styled` における DSL を開始する宣言。

この中で囲まれた範囲では、charcoal のガイドラインに沿ったスタイルしか（そのメソッドチェーンに従って）書くことができない。

返り値は `(props: P) => CSSObject` である。theme 関数の型が、ではなく返り値の型がこれである。

つまり、`styled-components` のテンプレートに書くことができる関数を組み立てる高階関数が `theme()` だと言える。

### `spec()` 関数

`@charcoal-ui/styled` において、ユーザーがスタイルを定義する関数。

基本は `o` を受け取って、`Internal`、`Internal[]` を返す。
が、条件によって当たったり当たらなかったりするスタイル定義もあるため、`null` `false` `undefined` も返り値として許容される。

すなわち、spec の返り値は `Internal | null | false | undefined | Array<Internal | null | false | undefined>` である。

### `builder`

spec の引数として現れる、 `o` と名指されるオブジェクトのこと。

`o` は特に何かの略ではなく、箇条書き感のある記号としてつけられている。

中にメソッドチェーンの可能なオブジェクトが、CSS のプロパティ分野ごとに生えている。これの定義方法は後述する。

### `Internal` 型

`o.bg.background1` のような宣言の返り値のこと。`theme()` 関数がこれを解釈し、最終的に `CSSObject` へと変換する。

ユーザーからは `background1` や `hover` などのメソッドしか生えていないように見えるが、実際には `[internalSym]` という `Symbol` 型のプロパティが生えている。

このシンボルはライブラリ外に export されないため、ユーザーはこのプロパティを叩くことはできないが、`theme()` 関数はこれにアクセスできるという事実上パッケージプライベートな挙動をする。

### `Context` 型

複数のスタイル定義の間（というより 1 つの `theme()` 関数内）で共有される状態のこと。たとえば

- `o.bg.background1.hover` を書くと自動で `transition: background-color 0.2s` が挿入される（ホバー時に transition するため）
- `o.typography(14).preserveHalfLeading` を書くと自動で `::before` `::after` が挿入される

といった挙動を実現するのに使われる。

`context` は各 `Internal` 型の `internalSym` の中にプロパティとして生える。

## メソッドチェーンの仕組み

`Internal` 型は、メソッドチェーンの続きにあたるメソッドと、現時点で確定したスタイル定義を格納した `internalSym` を持つ。

たとえば、`o.bg.background1` の中身はおおよそ次のようになる。

```ts
return {
  // このあと叩いていいメソッド
  get hover() {
    ...
  },

  // 内部状態（ ライブラリ内からしかアクセスできない ）
  [internalSym]: {
    // 複数のスタイル定義で共有する状態
    context: {},

    // CSS を組み立てる関数
    operation(context: Context): CSSObject
  }
}
```

`Internal` を定義するのに使われるのが `factory` である。

1 つの factory が 1 つのメソッドに対応するとは限らない（1 度に複数のメソッドを定義する factory もある）。内部的には最終的に `Object.defineProperties()` が行われる。

詳しくは `factories/lib.ts` を参照。
