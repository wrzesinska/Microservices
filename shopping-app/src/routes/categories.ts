import * as express from 'express'
import * as categoriesService from '../services/categories'
import {body, validationResult} from "express-validator";
import { CategoryCreatePayload } from "../interfaces/categories";

export const categoriesRoutes = express.Router()

// List categories
categoriesRoutes.get('/', async (req, res) => {
    const result = await categoriesService.getCategories()

    res.json(result)
})

// category details
categoriesRoutes.get('/:category_id', async (req, res) => {
    const categoryId = req.params['category_id']
    const category = await categoriesService.getCategoryById(categoryId)
    if (category) {
        res.json(category)
    } else {
        res.status(404).json({ error: 'wrong category id' })
    }
})

// Add New Users
categoriesRoutes.post('/', [
    body('name').exists(),
    body('desc').exists(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const createCategoryPayload: CategoryCreatePayload = req.body

    const categoryId = await categoriesService.createCategory(createCategoryPayload)
    res.status(201).send({ ok: true, id: categoryId })
})
