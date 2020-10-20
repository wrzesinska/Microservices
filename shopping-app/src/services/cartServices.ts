import path from "path"
import { CartItem } from "../interfaces/cart";

const carts = [
    {
        id: 1,
        items: [
            { itemId: 1, desc: 'item1', qty: 3 },
            { itemId: 2, desc: 'item2', qty: 1 },
            { itemId: 3, desc: 'item3', qty: 2 }
        ]
    },
    {
        id: 2,
        items: []
    },
    {
        id: 3,
        items: []
    }
];

export const getCarts = async () => {
    return await carts;
}

export const getCartById = async (cartId) => {
    const cart = await getCarts();
    const filteredCart = await cart.filter(c => c.id === parseInt(cartId))
    return filteredCart[0]
}

export const addToCart = async (cartId, product: CartItem) => {
    const cart = await getCarts();
    const filteredCart = await cart.filter(c => c.id === parseInt(cartId))
    filteredCart[0].items.push(product);
    console.log(filteredCart);
    return filteredCart
}
