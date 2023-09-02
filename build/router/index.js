"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = __importDefault(require("./authentication"));
const post_1 = __importDefault(require("./post"));
const router = express_1.default.Router();
exports.default = () => {
    console.log('router');
    (0, authentication_1.default)(router);
    (0, post_1.default)(router);
    return router;
};
