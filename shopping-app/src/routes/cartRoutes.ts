import * as express from 'express'
import * as cartServices from '../services/cartServices'

export const cartRoutes = express.Router()


cartRoutes.get('/', async (req, res) => {
    const carts = cartServices.getCarts()
    res.send(carts)
})

cartRoutes.get('/:cart-id', async (req, res) => {
    const cartId = req.params['cart-id']
    res.send(cartServices.getCartById(cartId))
})