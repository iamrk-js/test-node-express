const mongoose = require('mongoose');

const postsSchema =  mongoose.Schema({
    title : {type : String, required :true, maxlength : [128, `Invalid Length, Maximum length of title should be 128 characters`]},
    userId : {type : Number, required: true},
    content : {type : String, required : true, minlength : [700,  `Invalid Length, Minimum length of title should be 700 characters`]}
})

const Posts = mongoose.model("posts",postsSchema)

module.exports = Posts;