import * as express from 'express'
import { body, validationResult } from 'express-validator'
import { CartPayload, CartItem } from '../interfaces/cart'
import * as cartServices from '../services/cartServices'

export const cartRoutes = express.Router()

cartRoutes.get('/', async (req, res) => {
    const carts = await cartServices.getCarts()
    res.send(carts[0])
})

cartRoutes.get('/all-carts', async (req, res) => {
    const carts = await cartServices.getCarts()
    res.send(carts)
})

cartRoutes.get('/all-carts/:cart_id', async (req, res) => {
    const cartId = req.params['cart_id']
    const cart = await cartServices.getCartById(cartId)
    res.send(cart)
});

cartRoutes.post('/', [
    body('cartId').exists(),
    body('itemId').exists(),
    body('desc').exists(),
    body('qty').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { cartId } = req.body;
    const createNewItem: CartItem = {
        itemId: parseInt(req.body.cartId),
        desc: req.body.desc,
        qty: req.body.qty
    }
    const updatedCart = await cartServices.addToCart(cartId, createNewItem)

    res.status(201).send({ ok: true, updatedCart })
});
