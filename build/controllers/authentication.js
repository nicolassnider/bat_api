"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const users_1 = require("../db/users");
const helpers_1 = require("../helpers");
const index_1 = require("../helpers/index");
const register = async (req, res) => {
    try {
        console.log('register');
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.sendStatus(400);
        }
        const existingUser = await (0, users_1.getUserByEmail)(email);
        console.log(existingUser);
        if (existingUser) {
            return res.sendStatus(409);
        }
        const salt = (0, helpers_1.random)();
        const user = await (0, users_1.createUser)({
            email,
            username,
            authentication: {
                salt,
                password: (0, index_1.authentication)(salt, password),
            }
        });
        return res.status(201).json(user).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.register = register;
