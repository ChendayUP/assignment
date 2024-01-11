import { User } from "../../interfaces/user-interface"
import styled from "styled-components"

interface TableRowProps {
  user: User
}
export default function TableRow({ user }: TableRowProps) {
  return (
    <TR>
      <TD>{user.id}</TD>
      <TD>{user.name}</TD>
      <TD>{user.lastName}</TD>
    </TR>
  )
}

const TR = styled.tr``

const TD = styled.td``
