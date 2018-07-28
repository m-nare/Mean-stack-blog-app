const express = require('express');
const router = express.Router();

const Post = require('../models/post');
const config = require('../config/database');

// create post
router.post('/create', (req, res, next) => {
    let newPost = new Post({
		title: req.body.title,
		body: req.body.body,
		user_id: req.body.user_id,
		category_id: req.body.category_id
	});
    
    Post.addPost(newPost, (err, post) => {
		if(err){
			res.json({success: false, msg: 'Failed to create post'});
		} else {
			res.json({success: true, msg: 'Post created'});
		}
	});
});

// get all posts
router.get('/', (req, res, next) => {
    Post.getPosts((err, posts) => {
        if(err) throw err;
        if(!posts){
            return res.json({success: false, msg: 'No posts found'});
        };
        res.json(posts);
    });
});

// find post by id
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Post.getPostById(id, (err, post) => {
		if(err) throw err;
		if(!post){
			return res.json({success: false, msg: 'Post not found'});
		}
		res.json(post);
	});
});

// delete post
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Post.deletePost(id, (err, post) => {
		if(err) throw err;
		if(!post){
			return res.json({success: false, msg: 'Post not found'});
		}
		res.json({success: true, msg: 'Post deleted'});
	});
});

// update post
router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const post = req.body;
	const updPost = {};

	if(post.title){
		updPost.title = post.title;
	}

	if(post.body){
		updPost.body = post.body;
	}

	if(post.user_id){
		updPost.user_id = post.user_id;
	}

	if(post.category_id){
		updPost.category_id = post.category_id;
	}

	if(!updPost){
		res.json({success: false, msg: 'Bad data'});
	}

	Post.updatePost(id, updPost, (err, post) => {
		if(err) throw err;
		if(!post){
			return res.json({success: false, msg: 'Post not found'});
		}
		res.json({success: true, msg: 'Post updated'});
	});
});

// find posts by category id
router.get('/category/:id', (req, res, next) => {
	const id = req.params.id;
	Post.getPostsByCategoryId(id, (err, posts) => {
		if(err) throw err;
		if(!posts){
			return res.json({success: false, msg: 'Posts by category not found'});
		}
		res.json(posts);
	});
});

// find posts by user id
router.get('/user/:id', (req, res, next) => {
	const id = req.params.id;
	Post.getPostsByUserId(id, (err, posts) => {
		if(err) throw err;
		if(!posts){
			return res.json({success: false, msg: 'Posts by user not found'});
		}
		res.json(posts);
	});
});

// file upload function
router.post('/photo', function (req, res, next) {
	var path = '';
	upload(req, res, function(err) {
		if(err){
			console.log(err);
			return res.status(422).send("an error occured");
		}
		path = req.file.path;
		return res.send("Upload completed for "+path);
	});
});


// export posts.js
module.exports = router;

