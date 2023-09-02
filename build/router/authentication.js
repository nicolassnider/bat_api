"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("../controllers/authentication");
exports.default = (router) => {
    router.post('/auth/register', authentication_1.register);
    router.get('/auth/health', (req, res) => { res.send({ status: 'ok' }); });
};
