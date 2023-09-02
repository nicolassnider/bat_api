"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmail = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, required: true, select: false },
        sessionToken: { type: String, select: false },
    },
});
exports.UserModel = mongoose_1.default.model('User', UserSchema);
const getUsers = async () => {
    await exports.UserModel.find();
};
exports.getUsers = getUsers;
const getUserByEmail = async (email) => {
    return await exports.UserModel.findOne({ email });
};
exports.getUserByEmail = getUserByEmail;
const getUserBySessionToken = async (sessionToken) => {
    await exports.UserModel.findOne({ 'authentication.sessionToken': sessionToken });
};
exports.getUserBySessionToken = getUserBySessionToken;
const getUserById = async (id) => {
    await exports.UserModel.findById(id);
};
exports.getUserById = getUserById;
const createUser = async (values) => {
    new exports.UserModel(values).save().then((user) => user.toObject());
};
exports.createUser = createUser;
const deleteUserById = async (id) => {
    exports.UserModel.findByIdAndDelete({ _id: id });
};
exports.deleteUserById = deleteUserById;
const updateUserById = async (id, values) => {
    exports.UserModel.findByIdAndUpdate(id, values);
};
exports.updateUserById = updateUserById;
