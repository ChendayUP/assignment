import { useEffect, useState } from "react"
import GlobalStyles from "./global-styles"
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"
import { ToastContainer } from "react-toastify"
import CreateUserform from "./components/forms/create-user-form"
import { fetchUser } from "./services/firebase-service"
import UserTable from "./components/table/user-table"
import { User } from "./interfaces/user-interface"


export default function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetchUserList()
  }, [])

  const fetchUserList = () => {
    fetchUser((users) => {
      setUsers(users)
    })
  }

  return (
    <Container>
      <GlobalStyles />
      <ToastContainer position="bottom-right" />

      <CreateUserform />

      {users.length === 0 && <Header>No users in the database...</Header>}
      {users.length > 0 && <UserTable users={users}/>}
  
    </Container>
  )
}

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`

const Header = styled.h2`
  text-align: center;
  margin-top: 20px;
`