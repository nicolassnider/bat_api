import express from 'express';
import { createUser, getUserByEmail } from '../db/users';
import { random } from '../helpers';
import { authentication } from '../helpers/index';

export const register = async(req:express.Request, res:express.Response)=>{
	try {
		console.log('register');
		const{email,password,username}=req.body;
		
		if(!email || !password || !username){
			return res.sendStatus(400);
		}
		const existingUser = await getUserByEmail(email);
		console.log(existingUser)
		if(existingUser){
			return res.sendStatus(409);
		}
		const salt = random();
		const user = await createUser({
			email,
			username,
			authentication:{
				salt,
				password:authentication(salt,password),
			}
		});

		return res.status(201).json(user).end();
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
}