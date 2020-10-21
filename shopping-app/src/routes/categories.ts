import * as express from 'express'
import * as categoriesService from '../services/categories'
import { body, validationResult } from "express-validator";
import { CategoryCreatePayload } from "../interfaces/categories";

export const categoriesRoutes = express.Router()

// categoriesRoutes.param('category_id', async (req, res, next) => {
//     const categoryId = req.params['category_id']
//     const category = await categoriesService.getCategoryById(categoryId)
//     if (category) {
//         req.params['category'] = category
//         next()
//     } else {
//         res.status(401).send({ error: 'Not Found' })
//     }
// })

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
    body('parentId').exists(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const createCategoryPayload: CategoryCreatePayload = req.body

    const categoryId = await categoriesService.createCategory(createCategoryPayload)
    res.status(201).send({ ok: true, id: categoryId })
})

// category details
categoriesRoutes.get('/parent/:parent_id', async (req, res) => {
    const parentId = req.params['parent_id']
    const category = await categoriesService.getCategoriesByParent(parentId)
    if (category) {
        res.json(category)
    } else {
        res.status(404).json({ error: 'wrong category id' })
    }
})

categoriesRoutes.put('/', [
    body('id').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const updatedCategory = req.body;
    const category = await categoriesService.updateCategoryById(updatedCategory)
    if (category) {
        res.json(category)
    } else {
        res.status(404).json({ error: 'wrong category id' })
    }
})
