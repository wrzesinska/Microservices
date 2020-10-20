import * as express from "express";
import * as pagesService from '../services/pages';
// import {body} from "express-validator";


export const pagesRoutes = express.Router();

// Get product details
pagesRoutes.get('/', async (req, res) => {
    const answer = await pagesService.getPages();
    res.send(answer)
})

//Get description of a given product
pagesRoutes.post('/savepage', [
    // body('id').exists(),
    // body('name').exists,
], async (req, res) => {
    const createdPage = {id: req.body.id, name: req.body.name};

    const answer = await pagesService.savePages(createdPage);
    res.status(200).send(answer)
})
