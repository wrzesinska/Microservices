// import placki from 'express'
import * as express from 'express'
import { body, param } from 'express-validator'
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
  res.send(await paymentsService.createPayment(userID, productID, value))
})

paymentsRoutes.get('/status/:id', async (req, res) => {
  const paymentId = req.params['id']
  res.send(await paymentsService.getPaymentStatus(paymentId))
})

paymentsRoutes.put('/:id/status/:status', [
  param('status').isIn(['pending', 'failed', 'success'])
], async (req, res) => {
  const paymentId = req.params['id']
  const paymentStatus = req.params['status']

  switch (paymentStatus) {
    case 'pending':
    case 'failed':
    case 'success':
      res.send(await paymentsService.changeStatus(paymentId, paymentStatus))
      break;
    default:
      res.status(400).send({ error: 'bad status' })
  }

})




// get paymanets, create pymenr, check status, update

