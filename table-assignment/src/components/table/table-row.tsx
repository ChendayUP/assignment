import { User } from "../../interfaces/user-interface"
import styled from "styled-components"
import { deleteUser } from "../../services/firebase-service"
import { useState } from "react"
import EditUserModal from "../modals/edit-user-modal"
interface TableRowProps {
  user: User
}
export default function TableRow({ user }: TableRowProps) {
  const [showModal, setShowModal] = useState(false)
  return (
    <TR>
      <TD>{user.id}</TD>
      <TD>{user.name}</TD>
      <TD>{user.lastName}</TD>
      <TD>
        <EditUserContainer>
          <Button buttonType="update" onClick={() => setShowModal(!showModal)}>
            Edit
          </Button>
          <EditUserModal
            user={user}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </EditUserContainer>
      </TD>
      <TD>
        <Button buttonType="delete" onClick={() => deleteUser(user.id)}>
          Delete
        </Button>
      </TD>
    </TR>
  )
}

const TR = styled.tr`
  background-color: steelblue;

  &:hover {
    background-color: #295e8c;
  }
`

const TD = styled.td`
  padding: 8px 10px;
  cursor: default;
`

const Button = styled.button<{ buttonType: "update" | "delete" }>`
  width: 80px;
  color: white;
  background-color: ${(props) =>
    props.buttonType === "update" ? "darkOrange" : "crimson"};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  height: 22px;
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(-2px);
  }
`

const EditUserContainer = styled.div`
  position: relative;
`
