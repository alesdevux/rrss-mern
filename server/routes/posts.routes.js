import express from 'express'
import { getPosts } from '../controllers/posts.controller.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', getPosts)

export default router
