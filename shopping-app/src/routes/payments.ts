// import placki from 'express'
import * as express from 'express'
import * as paymentsService from '../services/payments'

export const paymentsRoutes = express.Router()

// Get payments
// GET /payments/

// Create payment
// POST /payments/
// paymentsRoutes.post('/', async (req, res) => {
//   const cash = req.body['cash']
//   res.send(paymentsService.createPendinPayment(cash))
// })

// Check payment status
  // paymentsRoutes.post('/', async (req, res) => {
  //   const cash = req.body['cash']
  //   res.send(paymentsService.createPendinPayment(cash))
  // })

// Update payment



paymentsRoutes.get('/add/:cash', async (req, res) => {
  const cash = req.params['cash']
  res.send(paymentsService.addMoney(cash))
})

paymentsRoutes.post('/newPayment', async (req, res) => {
  const userID = req.body['userID']
  const productID = req.body['productID']
  const value = req.body['value']
  res.send(paymentsService.createPayment(userID, productID, value))
})

paymentsRoutes.get('/status/:id', async (req, res) => {
  const paymentId = req.params['id']
  res.send(paymentsService.getPaymentStatus(paymentId))
})




// get paymanets, create pymenr, check status, update

