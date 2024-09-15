// const posts = [
//     {
//         title: "Node and Express",
//         content: "Node and express",
//         userId: 5,
//         id: "123"
//     },
// {
//     title: "Ngrx",
//     content: "Ngrx",
//     userId: 5,
//     id: "124"
// }
// ]

const Posts = require('../models/posts')

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find({})
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params
    let post = await Posts.findById(id)
    if (!post) {
      return res.status(404).json({ message: `Post Not Found` })
    }
    return res.status(200).json(post)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.createPost = async (req, res) => {
  try {
    const post = await Posts.create(req.body)
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.updatePost = async (req, res) => {
  try {
    let updateId = req.params.id
    let updatedPost = await Posts.findByIdAndUpdate(updateId, req.body, {
      new: true
    })

    if (!updatedPost) {
      return res.status(404).json({ message: `Post Not Found` })
    }

    return res.status(200).json(updatedPost)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.removePost = async (req, res) => {
  try {
    const { id } = req.params
    const deletedObj = await Posts.findByIdAndDelete(id)
    if (!deletedObj) {
      return res.json(404).json({ message: 'Post not found' })
    }

    res
      .status(200)
      .json({
        message: `The Post ${deletedObj.title} is removed successfully !!!`
      })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
