"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostController = exports.getPostByIdController = exports.getPostsListController = void 0;
const posts_1 = require("../db/posts");
const getPostsListController = async (req, res) => {
    try {
        const posts = await (0, posts_1.getPosts)();
        console.log(posts);
        return res.status(200).json(posts).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getPostsListController = getPostsListController;
const getPostByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await (0, posts_1.getPostById)(id);
        return res.status(200).json(post).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getPostByIdController = getPostByIdController;
const createPostController = async (req, res) => {
    try {
        console.log('create post');
        const { title, content, date, image } = req.body;
        if (!title || !content || !image) {
            return res.sendStatus(400);
        }
        const post = await (0, posts_1.createPost)({
            title,
            content,
            image,
        });
        console.log(post);
        return res.status(201).json(post).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.createPostController = createPostController;
