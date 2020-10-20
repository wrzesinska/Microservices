import path from "path"

export const getCarts = () => {
    const carts = require(path.join(__dirname, './data/carts.json'))
    //cartId = getUserById()
    return carts;
}

export const getCartById = (userId) => {
    const users = require(path.join(__dirname, './data/users.json'))
    const carts = require(path.join(__dirname, './data/carts.json'))
    //cartId = getUserById()
    const cartId = users.filter(u => u.id.includes(userId))
    return carts.filter(c => c.id.includes(cartId))
}

// export const addToCart = (product, cartId) => {
// }
