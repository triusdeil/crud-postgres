"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const database_1 = require("../db/database");
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('internal server error');
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const response = yield database_1.pool.query('SELECT * FROM users WHERE ID = $1', [id]);
        return res.json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('internal server error');
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const response = yield database_1.pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        return res.json({ message: "User created successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('internal server error');
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name, email } = req.body;
    yield database_1.pool.query('UPDATE users SET name = $1 , email = $2 WHERE id = $3', [name, email, id]);
    return res.json({ message: 'user updated successfully!!!' });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    const id = parseInt(req.params.id);
    yield database_1.pool.query('DELETE FROM users WHERE id = $1', [id]);
    return res.json(`user deleting successfully!!!`);
});
exports.deleteUser = deleteUser;
