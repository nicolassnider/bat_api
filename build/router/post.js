"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = require("../controllers/posts");
exports.default = (router) => {
    router.get('/posts/', posts_1.getPostsListController);
    router.get('/posts/:id', posts_1.getPostByIdController);
    router.post('/posts/', posts_1.createPostController);
    router.get('/posts/health', (req, res) => {
        res.send({ status: 'ok' });
    });
};
