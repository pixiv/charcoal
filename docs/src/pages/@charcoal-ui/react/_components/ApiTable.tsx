import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

export type TableItem = {
  type: string
  description: string
  default: string
  required: boolean
}

type DomProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>

export type ApiTableDataInterface = Record<string, TableItem>

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
export function ApiTable(props: { data: ApiTableDataInterface }) {
  return (
    <TableParentDiv>
      <StyledTable>
        <thead>
          <StyledTr>
            <th>name</th>
            <th>description</th>
            <th>type</th>
            <th>default</th>
            <th>required</th>
          </StyledTr>
        </thead>
        <tbody>
          {Object.entries(props.data)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => (b[1].required ? 1 : 0) - (a[1].required ? 1 : 0))
            .map(([key, value]) => {
              return (
                <StyledTr key={key}>
                  <td>{key}</td>
                  <td>{value.description}</td>
                  <td>{value.type}</td>
                  <td>{value.default}</td>
                  <td>{value.required ? 'required' : 'optional'}</td>
                </StyledTr>
              )
            })}
        </tbody>
      </StyledTable>
    </TableParentDiv>
  )
}

const StyledTable = styled.table`
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
  font-weight: normal;
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono',
    Menlo, Consolas, monospace;
`

const StyledTr = styled.tr`
  ${theme((o) => o.border.default.bottom)}
  height: 32px;

  > td,
  > th {
    padding: 8px 18px;
  }
`
const TableParentDiv = styled.div`
  overflow-x: auto;
  max-width: 100%;
  ${theme((o) => o.border.default)}
`
