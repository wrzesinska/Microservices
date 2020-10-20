import * as express from 'express'
import { body, validationResult } from 'express-validator'
import { CartPayload, CartItem } from '../interfaces/cart'
import * as cartServices from '../services/cartServices'

export const cartRoutes = express.Router()

// Get current user cart 
cartRoutes.get('/my', async (req, res) => {
    const currentUser = req.query.userId // FIXME: Auth middleware
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
    // body('cartId').exists(),
    body('itemId').exists(),
    body('desc').exists(),
    body('qty').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const currentUser = req.query.userId // FIXME: Auth middleware
    const cart = await cartServices.getCartByUserId(currentUser)

    const createNewItem: CartItem = {
        itemId: parseInt(req.body.cartId),
        desc: req.body.desc,
        qty: req.body.qty
    }
    const updatedCart = await cartServices.addToCart(cart.id, createNewItem)

    res.status(201).send({ ok: true, updatedCart })
});
