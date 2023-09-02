import mongoose from 'mongoose';
import IUser from '../interfaces/IUser';

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	authentication: {
		password: { type: String, required: true, select: false },
		salt: { type: String, required: true, select: false },
		sessionToken: { type: String, select: false },
	},
});


export const UserModel = mongoose.model('User', UserSchema);

export const getUsers = async () => {
	await UserModel.find();
};

export const getUserByEmail = async (email: string):Promise<IUser|null>=> {
	return await UserModel.findOne({ email });
};

export const getUserBySessionToken = async (sessionToken: string) => {
	await UserModel.findOne({ 'authentication.sessionToken': sessionToken });
};

export const getUserById = async (id: string) => {
	await UserModel.findById(id);
};

export const createUser = async (values: Record<string, any>) => {
	new UserModel(values).save().then((user) => user.toObject());
};

export const deleteUserById = async (id: string) => {
	UserModel.findByIdAndDelete({ _id: id });
};

export const updateUserById = async (
	id: string,
	values: Record<string, any>
) => {
	UserModel.findByIdAndUpdate(id, values);
};
