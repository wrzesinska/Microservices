// import placki from 'express'
import * as express from 'express'
import * as addressesService from '../services/addresses'

export const addressesRoutes = express.Router()

addressesRoutes.get('/', async (req, res) => {
  const filter = req.query['filter'] || ''
  const result = addressesService.getAddress(filter)
  
  res.send(result)
})
