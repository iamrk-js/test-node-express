const express = require('express')

const router = express.Router()

// const getAllPosts = require('../controllers/posts');
// const getPostById = require('../controllers/posts');
// const updatePost = require('../controllers/posts');
// const createPost = require('../controllers/posts');
// const removePost = require('../controllers/posts');

const {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  removePost 
} = require('../controllers/posts')

router.get('/api/v1/posts', getAllPosts)

router.get('/api/v1/posts/:id', getPostById)

router.post('/api/v1/posts', createPost)

router.patch('/api/v1/posts/:id', updatePost)

router.delete('/api/v1/posts/:id', removePost);

module.exports = router
