import * as express from "express";
 
export const usersRoutes = express.Router();

// Get Users
usersRoutes.get('/',(req,res)=>{})

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