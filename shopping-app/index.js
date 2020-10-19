const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()


// List products + filter by name?
app.get('/products', async (req, res) => {
  const filter = req.query['filter'] || ''
  // const productsJSON = await (fs.promises.readFile(path.join(__dirname, './data/products.json')))
  // const products = JSON.parse(productsJSON.toString())
  const products = require(path.join(__dirname, './data/products.json'))

  res.send(products.filter(p => p.name.includes(filter)))
})

// Get product details
app.get('/products/:product_id', async (req, res) => {
  const product_id = req.params['product_id']
  // const productJSON = await (fs.promises.readFile(path.join(__dirname, `./data/products/${product_id}/product.json`)))
  // const product = JSON.parse(productJSON.toString())
  const product = require(path.join(__dirname, `./data/products/${product_id}/product.json`))

  res.send(product)
})

// Get categories
app.get('/categories', (req, res) => { })


const PORT = parseInt(process.env.PORT || '8080')
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`)
})