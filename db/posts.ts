import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	date: { type: Date, required: false, default: Date.now },
	image: { type: String, required: true },
});

export const PostModel = mongoose.model('Post', PostSchema);

export const getPosts = async () => {
	return await PostModel.find();
};
export const getPostById = async (id: string) => {
	return await PostModel.findById(id);
};
export const createPost = async (values: Record<string, any>) => {
	return await new PostModel(values).save().then((post) => post.toObject());
};

export const deletePostById = async (id: string) => {
	return await PostModel.findByIdAndDelete({ _id: id });
};
export const updatePostById = async (
	id: string,
	values: Record<string, any>
) => {
	return await PostModel.findByIdAndUpdate(id, values);
};
