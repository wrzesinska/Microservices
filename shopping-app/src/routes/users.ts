import * as express from "express";
import * as usersService from "../services/users";
import { body, validationResult } from 'express-validator'
import { validate } from "../middlewares/validate";
import { User, UserCreatePayload, UserUpdatePayload } from "../interfaces/users";
import Router from 'express-promise-router' // promise + errors
import { getCartByUserId } from "../services";
import { authorizedOnly } from "../middlewares/usermiddleware";


export const usersRoutes = Router();

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


// Get Current User
usersRoutes.get('/me', async (req, res) => {
  // const [tokenType, token] = req.headers['authorization'].split(' ')
  // const user = await usersService.getUserByToken(token)
  res.send(req.user)
})

// Get Current User cart
usersRoutes.get('/me/cart', [authorizedOnly], async (req, res) => {
  const cart = await getCartByUserId(req.user.id)
  res.json(cart)
})


/* Authorization */

// Signup user
usersRoutes.post('/signup', [
  body('username').exists(),
  body('email').isEmail().exists(),
  body('password').exists(),
  validate()
], async (req, res) => {
  const createUserPayload: UserCreatePayload = req.body
  const user_id = await usersService.createUser(createUserPayload)
  // TODO: Send activation email
  res.status(201).send({ ok: true, id: user_id })
})

// Signin user
usersRoutes.post('/signin', [
  body('username').exists(),
  body('password').exists(),
  validate()
], async (req, res) => {
  const { username, password } = req.body

  res.send({
    access_token: await usersService.signinUser(username, password)
  })
})

// Signout user
usersRoutes.get('/signout', async (req, res) => {
  const [tokenType, token] = req.headers['authorization'].split(' ')
  res.json(await usersService.signoutUser(token))
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
  body('username').exists(),
  body('email').isEmail().exists(),
  validate()
], async (req, res) => {
  const createUserPayload: UserCreatePayload = req.body

  const user_id = await usersService.createUser(createUserPayload)
  res.status(201).send({ ok: true, id: user_id })
})

// Update existing User
usersRoutes.put('/:user_id', async (req, res) => {
  const updateUserPayload: UserUpdatePayload = req.body

  const user_id = await usersService.updateUser(updateUserPayload)
  res.status(201).send({ ok: true, id: user_id })

})

// Update existing User
usersRoutes.put('/:user_id', async (req, res) => { })
