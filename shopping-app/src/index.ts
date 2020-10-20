import express from 'express'
import asert from 'assert'
import { cartRoutes } from './routes/cartRoutes'
import { productsRoutes } from './routes/products'
import { addressesRoutes } from './routes/addresses'
import { paymentsRoutes } from './routes/payments'
import { usersRoutes } from './routes/users'
import { blogRoutes } from './routes/blogRoutes'
import { pagesRoutes } from './routes/pages'
import { orders } from './routes/orders'
import { categoriesRoutes } from './routes/categories'
import { couponRoutes } from './routes/coupons'
import cors from 'cors'
import errorhandler from 'errorhandler'
import morgan from 'morgan'
import { NotFoundError } from './services/pages'
// console.log(process.cwd(),__dirname)

const app = express()

app.use(express.json({}))
app.use(cors())
// app.use(errorhandler())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))


app.use('/products', productsRoutes)
app.use('/users', usersRoutes)
app.use('/addresses', addressesRoutes)


// Pawel
app.use('/categories', categoriesRoutes)

// Jakub
app.use('/orders', orders)

// Tomek
app.use('/cart', cartRoutes)

// Rafał
// app.use('/wishlist', wishlistRoutes)

// Szymon M
app.use('/payments', paymentsRoutes)

// Asia
// 
// Bartek
app.use('/coupons', couponRoutes)

app.use('/blog', blogRoutes)

// Szymon P
// app.use('/newsletter', newsletterRoutes)

// Julia
app.use('/pages', pagesRoutes)


app.use((err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(404).json({error:err.message})
  }
  res.status(500).json({ error: err })
})

asert(process.env.PORT, 'Missing env PORT variable')
asert(process.env.HOST, 'Missing env HOST variable')

const PORT = parseInt(process.env.PORT);
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`)
})

export { }
