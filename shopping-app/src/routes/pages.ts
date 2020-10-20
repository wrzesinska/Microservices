import * as express from "express";
import * as pagesService from '../services/pages';


export const pagesRoutes = express.Router();

// Get product details
pagesRoutes.get('/', async (req, res) => {
    const answer = pagesService.productArticles();
    res.send(answer)
})
