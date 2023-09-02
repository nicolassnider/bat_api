import express from 'express';

import authentication from './authentication';
import post from './post';

const router = express.Router();

export default (): express.Router => {
	console.log('router');
	authentication(router);
	post(router);
	return router;
};
