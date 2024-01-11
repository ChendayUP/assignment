import { useState } from "react"
import styled from "styled-components"
import { User } from "../../interfaces/user-interface"
import FormInput from "./forms-input"
import { toast } from "react-toastify"
import { addUser } from "../../services/firebase-service"

export default function CreateUserform() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [buttonTitle, setButtonTitle] = useState("create user")
  const [disabled, setDisabled] = useState(false)

  const createUser = async () => {
    if (!id || !name || !lastName) {
      toast.warn("Please fill all the fields")
      return
    }
    setButtonTitle("upload...")
    setDisabled(true)

    await addUser({ id, name, lastName })
    toast.success("create user success")

    setButtonTitle("create user")
    setDisabled(false)
  }
  
  return (
    <Container>
      <FormInput label="Id" placeholder="Your id" onChange={setId} />
      <FormInput label="Name" placeholder="Your Name" onChange={setName} />
      <FormInput
        label="Last Name"
        placeholder="Your Last Name"
        onChange={setLastName}
      />
        <Button onClick={createUser} disabled={disabled}>{buttonTitle}</Button>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`
const Button = styled.button`
  margin: 0 10px;
  align-self: flex-end;
  width: 140px;
  color: white;
  background-color: steelblue;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  height: 27px;
  font-size: 16px;
  transition: all 0.2s linear;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`
