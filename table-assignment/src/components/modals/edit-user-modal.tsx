import styled from "styled-components"
import { useState, Dispatch, FormEvent, useEffect, MutableRefObject, useRef } from "react"

import ModelInput from "./modal-input"
import { User } from "../../interfaces/user-interface"
import { updateUser } from "../../services/firebase-service"
import { clickOutsideListener } from "../../utils"

interface EditUserModalProps {
  user: User,
  showModal: boolean,
  setShowModal: Dispatch<React.SetStateAction<boolean>>
}

export default function EditUserModal({user, showModal, setShowModal}: EditUserModalProps) {
  const modalRef: MutableRefObject<null | HTMLFormElement> = useRef(null)
  const [name, setName] = useState(user.name)
  const [lastName, setLastName] = useState(user.lastName)

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateUser({ id: user.id, name, lastName, setShowModal})
  }

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      clickOutsideListener(event, modalRef, setShowModal)
    })
    return () => {
      document.removeEventListener('mousedown', (event) => {
        clickOutsideListener(event, modalRef, setShowModal)
      })
    }
  })

  return showModal ? (
    <Form ref={modalRef}  onSubmit={onFormSubmit}>
      <ModelInput label="Name" value={name} onChange={(value) => setName(value)}/>
      <ModelInput label="Last Name" value={lastName} onChange={(value) => setLastName(value)}/>
      <Button type='submit'>save</Button>
    </Form>
  ) : (
    <div></div>
  )
}

const Form = styled.form`
  background-color: darkOrange;
  z-index: 100;
  position: absolute;
  top: 24px;
  border-radius: 4px;
  padding: 15px 15px 25px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 28px, rgba(0, 0, 0, 0.5) 0px 10px 10px;
`

const Button = styled.button`
  margin-top: 10px;
  width: 140px;
  color: white;
  background-color: steelblue;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  height: 25px;
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(-2px);
  }
`