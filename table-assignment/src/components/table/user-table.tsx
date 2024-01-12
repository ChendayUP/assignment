import { User } from "../../interfaces/user-interface"
import styled from "styled-components"
import { tableColumns } from "../../constants/table-columns"
import TableRow from "./table-row"

interface UserTableProps {
  users: User[]
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <Container>
      <Table>
        <thead>
          <TR>
            {tableColumns.map((col) => {
              return <TH key={col.key}>{col.title}</TH>
            })}
          </TR>
        </thead>
        <tbody>
          {users.map((user) => {
            return <TableRow user={user}></TableRow>
          })}
        </tbody>
      </Table>

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 20px 0;
`

const Table = styled.table`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border-collapse: collapse;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px;
`
const TH = styled.th`
  padding: 8px 10px;
  text-align: start;
  cursor: default;
  font-size: 18px;
`

const TR = styled.tr`
background-color: #20486a;

`
