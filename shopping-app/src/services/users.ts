import { User, UserCreatePayload } from "../interfaces/users"


const usersData:User[] = [
  {
    id: '123', name: 'admin', password: 'admin'
  },
  {
    id: '234', name: 'user', password: 'user'
  },
]


export const getUsers = () => {
  return Promise.resolve(usersData)
}

export const getUserById = (id: string) => {
  return Promise.resolve(usersData.find(u => u.id == id))
}

export const createUser = (userPayload: UserCreatePayload) => {
  const user = {
    id: Date.now().toString(),
    ...userPayload
  }
  usersData.push(user)

  return Promise.resolve(user.id)
}

export const updateUser = () => { }

export const signupUser = () => { }

export const signinUser = () => { }

export const signoutUser = () => { }