import * as express from 'express'
import { body, validationResult } from 'express-validator'
import { CartPayload, CartItem } from '../interfaces/cart'
import { authorizedOnly } from '../middlewares/usermiddleware'
import { validate } from '../middlewares/validate'
import * as cartServices from '../services/cartServices'

export const cartRoutes = express.Router()

// Get current user cart 
cartRoutes.get('/my', [authorizedOnly], async (req, res) => {
    // const currentUser = req.user &&  req.user.id
    const currentUser = req.user?.id
    const carts = await cartServices.getCartByUserId(currentUser)
    res.send(carts)
})

cartRoutes.get('/', async (req, res) => {
    const carts = await cartServices.getCarts()
    res.send(carts)
})

cartRoutes.get('/:cart_id', async (req, res) => {
    const cartId = req.params['cart_id']
    const cart = await cartServices.getCartById(cartId)
    res.send(cart)
});

cartRoutes.post('/', [
    authorizedOnly,
    body('itemId').exists(),
    body('desc').exists(),
    body('qty').exists(),
    validate()
], async (req, res) => {
    const currentUserId = req.user.id // FIXME: Auth middleware
    const cart = await cartServices.getCartByUserId(currentUserId)

    const createNewItem: CartItem = {
        itemId: req.body.itemId,
        desc: req.body.desc,
        qty: req.body.qty
    }
    const updatedCart = await cartServices.addToCart(cart.id, createNewItem)

    res.status(201).send({ ok: true, updatedCart })
});
