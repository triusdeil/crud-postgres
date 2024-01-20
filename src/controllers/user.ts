import { Request, Response } from "express"
import { QueryResult } from "pg"
import { pool } from "../db/database"

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
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

export const createUser = (req: Request, res: Response) => {

}

export const updateUser = (req: Request, res: Response) => {

}

export const deleteUser = (req: Request, res: Response) => {

}