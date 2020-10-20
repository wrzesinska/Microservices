// import placki from 'express'
import * as express from 'express'
import * as paymentsService from '../services/payments'

export const paymentsRoutes = express.Router()


paymentsRoutes.get('/add/:cash', async (req, res) => {
  const cash = req.params['cash']
  res.send(paymentsService.addMoney(cash))
})
