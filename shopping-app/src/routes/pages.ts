import { randomBytes } from "crypto";
// import * as express from "express";
import Router from 'express-promise-router' // handle failed promises
import { body } from "express-validator";
import { validate } from "../middlewares/validate";
import * as pagesService from '../services/pages';
// import {body} from "express-validator";


export const pagesRoutes = Router();

// Get product details
pagesRoutes.get('/', async (req, res) => {
    const answer = await pagesService.getPages();
    res.send(answer)
})

//Save page to memory
pagesRoutes.post('/', [
    body('name').isAlphanumeric().notEmpty(),
    validate()
], async (req, res) => {
    const createdPage = {
        id: randomBytes(12).toString('hex'),
        name: req.body.name
    };
    const answer = await pagesService.savePages(createdPage);
    res.status(201).send(answer)
})
// pagesRoutes.post('/:page_Id/comments', [


pagesRoutes.get('/:page_id', [], async (req, res) => {
    const idToSearch = req.params.page_id;
    const answer = await pagesService.getPageById(idToSearch);
    res.status(200).send(answer)
})


//Search memory for a given page Id
// pagesRoutes.get('/:page_id', [], async (req, res,next) => {
//     try{
//         const idToSearch = req.params.page_id;
//         const answer = await pagesService.getPageById(idToSearch);
//         res.status(200).send(answer)
//     }catch(err){
//         // res.status(500).send(err)
//         next(err)
//     }
// })

