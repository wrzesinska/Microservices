import path from "path"

const pages = [
    { id: 123, name: 'O nas' },
    { id: 234, name: 'Kontakt' }
]

export const getPages = async () => {

    return pages
}



export const getProducts = (filter) => {
    const products = require('../../data/products.json')

    return (products.filter(p => p.name.includes(filter)))
}

export const getProductById = (product_id) => {

    const product = require('../../data/products/${product_id}/product.json')

    // return product
}

export const productArticles = () => {
    const articleObject = {
        testObject: 'true',
        testQuote: 'awesome'
    }
    return articleObject

}
