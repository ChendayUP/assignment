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
import { User } from "../interfaces/user-interface"

export const usersQuery = query(collection(db, "users"))

export function fetchUser(callback: (users: User[]) => void) {
  try {
    onSnapshot(usersQuery, (snapshot) => {
      const users = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        } as User
      })
      callback(users)
    })
  } catch (error) {
    console.log(error)
  }
}

export async function addUser(
  { id, name, lastName }: User,
  callback?: () => void
) {
  // try {
  //   await setDoc(doc(db, "users", id), {
  //     name,
  //     lastName,
  //   })
  //   callback()
  // } catch (error) {
  //   console.log(error)
  // }
  return setDoc(doc(db, "users", id), {
    name,
    lastName,
  })
}

export async function updateUser(
  { id, name, lastName }: User,
  callback: () => void
) {
  try {
    await updateDoc(doc(db, "users", id), {
      name,
      lastName,
    })
    callback()
  } catch (error) {
    console.log(error)
  }
}

export async function deleteUser(
  id: string,
  callback: () => void
) {
  try {
    await deleteDoc(doc(db, "users", id))
    callback()
  } catch (error) {
    console.log(error)
  }
}
