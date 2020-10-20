// import placki from 'express'
import * as express from 'express'
import * as addressesService from '../services/addresses'

export const addressesRoutes = express.Router()

addressesRoutes.get('/', async (req, res) => {
  const result = await addressesService.getAddress()
  res.json(result)
})

addressesRoutes.post('/', async (req, res) => {
  const createAddress = req.body
  const newAddress = await addressesService.createAddress()
  res.status(201).send({ ok: true , newAddress })
})
