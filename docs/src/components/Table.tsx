import styled from 'styled-components'
import { theme } from '../utils/theme'

export type TableItem = Record<string, any>
export type TableDataInterface = Record<string, TableItem>

interface Props<T> {
  data: T
}

/**
 * 型をもとに良い感じにテーブルの値を作る
 */
function toTableCell(value: unknown) {
  switch (typeof value) {
    case 'boolean': {
      return value ? 'YES' : 'NO'
    }

    case 'string':
    case 'number': {
      return value
    }

    case 'undefined': {
      return ''
    }

    default: {
      return value?.toString() ?? JSON.stringify(value) ?? '???'
    }
  }
}

/**
 * 汎用のテーブルコンポーネント
 *
 * TODO: th を変えたいときに変えられるようにする
 */
export function Table<T extends TableDataInterface>({ data }: Props<T>) {
  const [sample] = Object.values(data)
  const columns = Object.keys(sample) as (keyof TableItem)[]

  return (
    <TableParentDiv>
      <StyledTable>
        <thead>
          <StyledTr>
            <th>name</th>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </StyledTr>
        </thead>
        <tbody>
          {Object.entries(data)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => (b[1].required ? 1 : 0) - (a[1].required ? 1 : 0))
            .map(([key, value]) => {
              return (
                <StyledTr key={key}>
                  <td>{key}</td>
                  {columns.map((column) => (
                    <td key={column}>{toTableCell(value[column])}</td>
                  ))}
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
