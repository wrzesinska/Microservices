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
