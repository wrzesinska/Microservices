// import placki from 'express'
import * as express from 'express'
import { body } from 'express-validator'
import * as addressesService from '../services/addresses'
import { validate } from '../middlewares/validate'


export const addressesRoutes = express.Router()

addressesRoutes.get('/', async (req, res) => {
  const result = await addressesService.getAddress()
  res.json(result)
})

addressesRoutes.get('/:id', async (req, res) => {
  const result = await addressesService.getAddressById(req.params.id)
  res.json(result)
})

addressesRoutes.post('/', [
  body('email').isEmail(),
  validate()
], async (req, res) => {
  const createAddress = req.body
  const newAddress = await addressesService.createAddress(createAddress)
  res.status(201).send({ ok: true, newAddress })
})
