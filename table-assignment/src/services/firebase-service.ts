import {
  query,
  collection,
  onSnapshot,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"
import { db } from "../constants/firebase-config"
import { User, CreateUser, UpdateUser } from "../interfaces/user-interface"
import { toast } from "react-toastify"

export const usersQuery = query(collection(db, "users"))

export function fetchUser(
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
) {
  try {
    onSnapshot(usersQuery, (snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          } as User
        })
      )
    })
  } catch (error) {
    console.log(error)
  }
}

export async function createUser(args: CreateUser) {
  const { id, name, lastName, users, resetFormFields} = args
  const idRegexCheck = /^\d+$/
  if (!id || !name || !lastName) {
    return toast.error('all fields required')
  }

  if (!idRegexCheck.test(id)) {
    return toast.error("wrong id format")
  }

  const isUserExists = users.some(user => user.id === id)
  if (isUserExists) {
    toast.info('user already exist')
    return 
  }

  try {
    await setDoc(doc(db, "users", id), {
      name,
      lastName,
    })

    resetFormFields()
    toast.success('user created succfully')
  } catch (error) {
    console.log(error)
  }
}

export async function updateUser(args: UpdateUser) {
  const { id, name, lastName, setShowModal } = args
  try {
    await updateDoc(doc(db, "users", id), {
      name,
      lastName,
    })
    setShowModal(false)
    toast.success("edit success")
  } catch (error) {
    toast.success("edit fail")
    console.log(error)
  }
}

export async function deleteUser(id: string) {
  const isConfirmed = window.confirm('is delete')

  if (!isConfirmed) return

  try {
    await deleteDoc(doc(db, "users", id))
    toast.success('delete success')
  } catch (error) {
    console.log(error)
    toast.success('delete success error')
  }
}
