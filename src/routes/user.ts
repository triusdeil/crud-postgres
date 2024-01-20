import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user";
 
export const userRouter = Router();

userRouter
        .get('/', getUsers)
        .get('/:id', getUserById)
        .post('/',createUser)
        .put('/:id', updateUser)
        .delete('/:id', deleteUser)

