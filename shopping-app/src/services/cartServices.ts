import path from "path"
import { CartItem } from "../interfaces/cart";

const carts = [
    {
        id: 1,
        user_id: 1,
        items: [
            { itemId: 1, desc: 'item1', qty: 3 },
            { itemId: 2, desc: 'item2', qty: 1 },
            { itemId: 3, desc: 'item3', qty: 2 }
        ]
    },
    {
        id: 2,
        user_id: 2,
        items: []
    },
    {
        id: 3,
        user_id: 3,
        items: []
    }
];

export const getCarts = async () => {
    return carts;
}

export const getCartById = async (cartId) => {
    const cart = await getCarts();
    const filteredCart = cart.find(c => c.id === parseInt(cartId))
    return filteredCart
}

export const getCartByUserId = async (userId) => {
    const cart = await getCarts();
    const filteredCart = cart.find(c => c.user_id === parseInt(userId))
    return filteredCart
}

export const addToCart = async (cartId, product: CartItem) => {
    const cart = await getCartById(cartId)
    cart.items.push(product);
    return cart
}
