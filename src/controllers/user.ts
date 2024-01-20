import { Request, Response } from "express"
import { QueryResult } from "pg"
import { pool } from "../db/database"

export const getUsers = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users')
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('internal server error')
    }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE ID = $1', [id])
        return res.json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('internal server error')
    }
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const {name, email} = req.body
    try {
        const response:QueryResult = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
        return res.json({message: "User created successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json('internal server error')
    }
}

export const updateUser = async(req: Request, res: Response):Promise<Response> => {
    const id = req.params.id
    const { name, email } = req.body
    await pool.query('UPDATE users SET name = $1 , email = $2 WHERE id = $3', [name,email,id])
    return res.json({message: 'user updated successfully!!!'})
}

export const deleteUser = async (req: Request, res: Response):Promise<Response> => {
    console.log(req.params.id)
    const id = parseInt(req.params.id)
    await pool.query('DELETE FROM users WHERE id = $1', [id])
    return res.json(`user deleting successfully!!!`)
}