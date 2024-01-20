"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
app.use('/users', user_1.userRouter);
app.listen(3000, () => {
    console.log('server on port 3000');
});
