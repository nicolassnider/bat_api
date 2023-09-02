import express from 'express';
import { createPostController, getPostByIdController, getPostsListController } from '../controllers/posts';

export default (router: express.Router) => {	
	router.get('/posts/', getPostsListController);
	router.get('/posts/:id', getPostByIdController);
	router.post('/posts/', createPostController);
	router.get('/posts/health', (req, res) => {
		res.send({ status: 'ok' });
	});
};
