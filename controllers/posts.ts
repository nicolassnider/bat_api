import express from 'express';

import { getPosts, getPostById, createPost } from '../db/posts';

export const getPostsListController = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const posts = await getPosts();
		console.log(posts);
		return res.status(200).json(posts).end();
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
};

export const getPostByIdController = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { id } = req.params;
		const post = await getPostById(id);
		return res.status(200).json(post).end();
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
};

export const createPostController = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		console.log('create post');
		const { title, content, date, image } = req.body;

		if (!title || !content || !image) {
			return res.sendStatus(400);
		}

		const post = await createPost({
			title,
			content,
			image,
		});
		console.log(post);
		return res.status(201).json(post).end();
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
};
