// import placki from 'express'
import * as express from 'express'
import * as productsService from '../services/products'

export const productsRoutes = express.Router()


// List products + filter by name?
productsRoutes.get('/', async (req, res) => {
  const filter = req.query['filter'] || ''
  const result = productsService.getProducts(filter)
  
  res.send(result)
})

// Get product details
productsRoutes.get('/:product_id', async (req, res) => {
  const product_id = req.params['product_id']

  res.send(productsService.getProductById(product_id))
})