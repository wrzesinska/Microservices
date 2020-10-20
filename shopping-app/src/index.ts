import express from 'express'
import { cartRoutes } from './routes/cartRoutes'
import { productsRoutes } from './routes/products'
import { usersRoutes } from './routes/users'

// console.log(process.cwd(),__dirname)

const app = express()
app.use('/products', productsRoutes)
app.use('/users', usersRoutes)

// Pawel
// app.use('/categories', categoriesRoutes)

// Jakub
// app.use('/orders', ordersRoutes)

// Tomek
app.use('/cart', cartRoutes)

// Rafał
// app.use('/wishlist', wishlistRoutes)

// Szymon M
// app.use('/payments', paymentsRoutes)

// Asia
// app.use('/addresses', addressesRoutes)

// Bartek
// app.use('/coupons', couponsRoutes)

// Cristian
// app.use('/blog', blogRoutes)

// Szymon P
// app.use('/newsletter', newsletterRoutes)

// Julia
// app.use('/pages', pagesRoutes)




const PORT = parseInt('3000' || '8080')

const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`)
})

export { }