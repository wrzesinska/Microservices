import { User, UserCreatePayload } from "../interfaces/users"
import { NotFoundError } from "../middlewares/errors"
import { createHash, randomBytes } from 'crypto'


const usersData: User[] = [
  {
    id: '123', username: 'admin', password: 'admin'
  },
  {
    id: '234', username: 'user', password: 'be78bbf6b1e4056f3b5f19da7753880f'
  },
]


export const getUsers = async () => {
  return (usersData)
}

export const getUserById = async (id: string) => {
  return (usersData.find(u => u.id == id))
}

export const createUser = async (userPayload: UserCreatePayload) => {
  if (usersData.find(u => u.username == userPayload.username)) {
    throw new Error('Username already exist!')
  }
  const password = hashUserPassword(userPayload.password)
  const user = {
    id: Date.now().toString(),
    ...userPayload,
    password
  }
  usersData.push(user)

  return (user.id)
}

export const updateUser = async (userPayload) => {
  const existing = await (getUserById(userPayload.id))
  const user = {
    ...existing,
    ...userPayload
  }
  const index = usersData.findIndex(u => u.id == existing.id)
  if (index != -1) {
    usersData[index] = user
  } else {
    throw new NotFoundError('User not found')
  }
  return (user)
}


/* Authentication */
const authTokens = [
  // { id: 'abc', userId: '123', expiresIn: 1231141 }
]

export const signupUser = () => { }

export const getUserByToken = async (token: string) => {

  const auth = authTokens.find(a => a.id == token)
  if (!auth) {
    throw new Error('Invalid access token')
  }
  return getUserById(auth.userId)
}

export const signinUser = async (username: string, password: string) => {
  const user = usersData.find(u => u.username == username)
  if (!user || user.password !== hashUserPassword(password)) {
    throw new Error('Incorrect username or password')
  }
  const token = { userId: user.id, id: randomBytes(10).toString('hex') }
  authTokens.push(token)

  return token.id
}

export const signoutUser = async (token: string) => {
  const index = authTokens.findIndex(a => a.id == token)
  authTokens.splice(index, 1)
  return { ok: 1 }
}


function hashUserPassword(password: string) {
  return createHash('md5')
    .update(password + process.env.PASSWORD_SALT).digest('hex')
}
