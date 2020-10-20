import * as express from "express";
import * as pagesService from '../services/pages';
// import {body} from "express-validator";


export const pagesRoutes = express.Router();

// Get product details
pagesRoutes.get('/', async (req, res) => {
    const answer = await pagesService.getPages();
    res.send(answer)
})

//Save page to memory
pagesRoutes.post('/savePage', [], async (req, res) => {
    const createdPage = {id: req.body.id, name: req.body.name};
    const answer = await pagesService.savePages(createdPage);
    res.status(201).send(answer)
})
//Search memory for a given page Id
pagesRoutes.post('/searchPage', [], async (req, res) => {
    const idToSearch = req.body.id;
    const answer = await pagesService.checkIfPageExists(idToSearch);
    res.status(201).send(answer)
})

