const express = require('express');
const { body } = require('express-validator');

const Post = require('../models/post');
const isAuth = require('../middleware/is-auth');


const feedController= require('../controllers/feed');

const router = express.Router();

//get/feed/posts
router.get('/posts', isAuth, feedController.getPosts);
//POST / feed/posts 
router.post(
    '/post', 
     isAuth,
[
    body('title')
    .trim()
    .isLength({min:5}),
    body('content')
    .trim()
    .isLength({min:5})
], 
feedController.createPost
);

router.get('/post/:postId',isAuth, feedController.getPost);

router.put('/post/:postId', isAuth,
[
    body('title')
    .trim()
    .isLength({min:5}),
    body('content')
    .trim()
    .isLength({min:5})
], 
feedController.updatePost
);



router.delete('/post/:postId',isAuth, feedController.deletePost);


module.exports = router; 