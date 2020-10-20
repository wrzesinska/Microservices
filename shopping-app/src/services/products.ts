import path from "path"



export const getProducts = (filter) => {
  const products = require('../../data/products.json')

  return (products.filter(p => p.name.includes(filter)))
}

export const getProductById = (product_id) => {

  const product = require(`../../data/products/${product_id}/product.json`)
  

  return product
}
