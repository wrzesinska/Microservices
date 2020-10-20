import * as express from "express";
import * as pagesService from '../services/pages';


export const pagesRoutes = express.Router();

// Get product details
pagesRoutes.get('/', async (req, res) => {
    const answer = await pagesService.getPages();
    res.send(answer)
})

//Get description of a given product
pagesRoutes.post('/:productId', [], async (req, res) => {

    const product_id = req.params['productId'];
    const product = require(`../../data/products/${product_id}/product.json`)

    res.status(200).send(product.description)
})
