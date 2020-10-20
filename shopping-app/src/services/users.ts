
const usersData = [
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

export const createUser = () => { }

export const updateUser = () => { }

export const signupUser = () => { }

export const signinUser = () => { }

export const signoutUser = () => { }