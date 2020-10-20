import * as express from 'express'
import * as categoriesService from '../services/categories'

export const categoriesRoutes = express.Router()

// List categories
categoriesRoutes.get('/', async (req, res) => {
    const result = categoriesService.getCategories()

    res.send(result)
})

// category details
categoriesRoutes.get('/:category_id', async (req, res) => {
    const categoryId = req.params['category_id']
    const category = categoriesService.getCategoryById(parseInt(categoryId));

    if (category.length) {
        res.send(categoriesService.getCategoryById(parseInt(categoryId)))
    } else {
        res.send('wrong category id');
    }
})

export {}
