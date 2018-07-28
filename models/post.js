const mongoose = require('mongoose');
const config = require('../config/database');

// Post schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

// get all posts
module.exports.getPosts = function(callback){
    Post.find(callback).sort({created_at: 'desc'});
}

// save post
module.exports.addPost = function(newPost, callback){
    newPost.save(callback);
}

// find post by id
module.exports.getPostById = function(id, callback){
    Post.findById(id, callback);
}

// delete post
module.exports.deletePost = function(id, callback){
    Post.findByIdAndRemove(id, callback);
}

// update post
module.exports.updatePost = function(id, updPost, callback){
    Post.findByIdAndUpdate(id, updPost, {}, callback);
}

// get posts by category id
module.exports.getPostsByCategoryId = function(cat_id, callback){
    const query = {category_id: cat_id};
    Post.find(query, callback).sort({created_at: 'desc'});
}

// get posts by user id
module.exports.getPostsByUserId = function(user_id, callback){
    const query = {user_id: user_id};
    Post.find(query, callback);
}






