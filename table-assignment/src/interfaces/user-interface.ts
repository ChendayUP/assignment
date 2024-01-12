export interface User {
  id: string
  name: string
  lastName: string
}

export interface CreateUser {
  id: string
  name: string
  lastName: string
  users: User[]
  resetFormFields: () => void
}

export interface UpdateUser {
  id: string
  name: string
  lastName: string
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}