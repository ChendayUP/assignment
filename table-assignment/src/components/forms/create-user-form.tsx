import { useState, FormEvent } from "react"
import styled from "styled-components"
import { User } from "../../interfaces/user-interface"
import FormInput from "./forms-input"
import { createUser } from "../../services/firebase-service"

export default function CreateUserform({ users }: { users: User[] }) {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")

  const resetFormFields = () => {
    setId("")
    setName("")
    setLastName("")
  }

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createUser({ id, name, lastName, users, resetFormFields })
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <FormInput label="Id" value={id} placeholder="Your id" onChange={setId} />
      <FormInput
        label="Name"
        value={name}
        placeholder="Your Name"
        onChange={setName}
      />
      <FormInput
        label="Last Name"
        value={lastName}
        placeholder="Your Last Name"
        onChange={setLastName}
      />
      <Button type="submit">create user</Button>
    </Form>
  )
}

const Form = styled.form`
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
