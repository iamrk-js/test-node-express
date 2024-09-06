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

const Posts = require('../models/posts');

exports.getAllPosts = async (req, res) => {
    try{
        const posts = await Posts.find({});
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

// exports.getPostById = (req, res ) => {
//     // I have to get Params ID first and then find that object
//     let postId = req.params.id; // undefined
//     let obj = posts.find(post => post.id === postId)
//     res.status(200).json(obj);
// }

exports.createPost = async (req,res) => {
    try {
        const post = await Posts.create(req.body);
        res.status(200).json(post)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

// exports.updatePost = (req,res) => {
//     let updateId = req.params.id;
//     let updatedObj = req.body;

//     let getIndex = posts.findIndex(post => post.id === updateId);

//     posts[getIndex] = updatedObj;

//     res.status(201).json({
//         message : `Post with id ${updateId} is updated Successfully`,
//         post : updatedObj
//     })

// }

// exports.removePost =  (req,res) => {
//     let removeId = req.params.id;

//     let getIndex = posts.findIndex(post => post.id === removeId);

//     posts.splice(getIndex, 1);

//     res.status(200).json({
//         message : `The Post with id ${removeId} is removed successfully !!!`
//     })

// }