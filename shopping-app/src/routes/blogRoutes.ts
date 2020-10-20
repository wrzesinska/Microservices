import * as express from 'express'
import * as blogService from '../services/blogService'

export const blogRoutes = express.Router()


blogRoutes.get('/', async (req, res) => {
    const blogs = blogService.getAllBlogs()
    res.send(blogs)
})

blogRoutes.get('/:blog-name', async (req, res) => {
    const blogId = req.params['blog-name']
    res.send(blogService.getBlogByTitle(blogId))
})