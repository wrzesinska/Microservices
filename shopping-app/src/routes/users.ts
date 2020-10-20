import * as express from "express";
import { UserCreatePayload } from "../interfaces/users";
import * as usersService from "../services/users";
import { body, validationResult } from 'express-validator'

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
usersRoutes.post('/', [
  body('name').exists(),
  body('email').isEmail().exists(),
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const createUserPayload: UserCreatePayload = req.body

  const user_id = await usersService.createUser(createUserPayload)
  res.status(201).send({ ok: true, id: user_id })
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