import * as express from "express";
import { UserCreatePayload } from "../interfaces/users";
import * as usersService from "../services/users";

export const usersRoutes = express.Router();

// Middleware
// usersRoutes.use((req, res, next) => {
//   req.body = { name: 'nowy' }
//   next()
// })

// Get Users
usersRoutes.get('/', async (req, res) => {
  const users = await usersService.getUsers()
  res.json(users)
})


// Get User by id
usersRoutes.get('/:user_id', async (req, res) => {
  const { user_id } = req.params
  const user = await usersService.getUserById(user_id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not Found' })
  }
})

// Add New Users
usersRoutes.post<{}, { ok: boolean }, UserCreatePayload>('/', async (req, res) => {
  const createUserPayload = req.body

  const user = await usersService.createUser(createUserPayload)
  res.status(201).send({ ok: true })
})

// Update existing User
usersRoutes.put('/:user_id', (req, res) => { })

// Update existing User
usersRoutes.put('/:user_id', (req, res) => { })


/* Authorization */

// Get Current User
usersRoutes.get('/me', (req, res) => { })

// Get Current User cart
usersRoutes.get('/me/cart', (req, res) => { })

// Signup user
usersRoutes.post('/signup', (req, res) => { })

// Signin user
usersRoutes.post('/signin', (req, res) => { })

// Signout user
usersRoutes.get('/signin', (req, res) => { })