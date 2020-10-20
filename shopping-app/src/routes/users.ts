import * as express from "express";
import { getUsers } from "../services/users";
 
export const usersRoutes = express.Router();

// Get Users
usersRoutes.get('/',(req,res)=>{
  
  getUsers().then(users => {
    res.send(users)
  })
})

// Get Current User
usersRoutes.get('/me',(req,res)=>{})

// Get Current User cart
usersRoutes.get('/me/cart',(req,res)=>{})

// Get User by id
usersRoutes.get('/:user_id',(req,res)=>{})

// Add New Users
usersRoutes.post('/',(req,res)=>{})

// Update existing User
usersRoutes.put('/:user_id',(req,res)=>{})

// Update existing User
usersRoutes.put('/:user_id',(req,res)=>{})

// Signup user
usersRoutes.post('/signup',(req,res)=>{})

// Signin user
usersRoutes.post('/signin',(req,res)=>{})

// Signout user
usersRoutes.get('/signin',(req,res)=>{})