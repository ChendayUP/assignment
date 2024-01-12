import { useEffect, useState } from "react"

import styled from "styled-components"
import CreateUserform from "../components/forms/create-user-form"
import UserTable from "../components/table/user-table"
import { fetchUser } from "../services/firebase-service"
import { User } from "../interfaces/user-interface"


export default function Home() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetchUser(setUsers)
  }, [])

  return (
    <Container>
    <CreateUserform users={users}/>

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