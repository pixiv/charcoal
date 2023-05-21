import { Table } from '../../../../components/Table'

export type TableItem = {
  type: string
  description: string
  default?: string
  required?: boolean
}

export type TableDataInterface = Record<string, TableItem>

type DomProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>

/**
 * コンポーネントのPropsの型から、そのキー名を必須のキーとなるようなドキュメント構造の型
 * @param T コンポーネントのProps型
 * @param U コンポーネントから取り除くべきHTMLElementの型、HTMLAttributesを継承している際に不要なキーを必須にしないようにする。
 */
export type ApiTableData<T, U> = {
  [key in keyof Omit<T, keyof DomProps<U>>]-?: TableItem
}

/**
 * コンポーネントのPropsのドキュメントをテーブル形式で表示する
 * @param props ex. { data: { [propName]: { type: .... } } }
 */
export function ApiTable(props: { data: TableDataInterface }) {
  return <Table {...props} />
}
