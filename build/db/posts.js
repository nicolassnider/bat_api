"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostById = exports.deletePostById = exports.createPost = exports.getPostById = exports.getPosts = exports.PostModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: false, default: Date.now },
    image: { type: String, required: true },
});
exports.PostModel = mongoose_1.default.model('Post', PostSchema);
const getPosts = async () => {
    return await exports.PostModel.find();
};
exports.getPosts = getPosts;
const getPostById = async (id) => {
    await exports.PostModel.findById(id);
};
exports.getPostById = getPostById;
const createPost = async (values) => {
    await new exports.PostModel(values).save().then((post) => post.toObject());
};
exports.createPost = createPost;
const deletePostById = async (id) => {
    await exports.PostModel.findByIdAndDelete({ _id: id });
};
exports.deletePostById = deletePostById;
const updatePostById = async (id, values) => {
    await exports.PostModel.findByIdAndUpdate(id, values);
};
exports.updatePostById = updatePostById;
