"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
exports.userRouter = (0, express_1.Router)();
exports.userRouter
    .get('/', user_1.getUsers)
    .get('/:id', user_1.getUserById)
    .post('/', user_1.createUser)
    .put('/:id', user_1.updateUser)
    .delete('/:id', user_1.deleteUser);
