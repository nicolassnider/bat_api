import express from 'express';
import { register } from '../controllers/authentication';

export default(router:express.Router)=>{
	router.post('/auth/register',register);
	router.get('/auth/health',(req,res)=>{res.send({status:'ok'})});
};