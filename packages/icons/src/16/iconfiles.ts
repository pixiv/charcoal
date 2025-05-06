export default {
  '16/TestIconFileThatNeverExists': () =>
    // @ts-expect-error jsをdynamic importしてるので型エラーが出る
    import('./TestIconThatNeverExists.js').then((m) => m.default),
}
