import { pool } from '../config/db.js';

const addUser = async({ email, password, rol, lenguage }) => {
    try {
        const consulta = 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *'
        const values = [email, password, rol, lenguage] 

        const result = await pool.query(consulta, values)
        return result.rowCount > 0 ? result.rows[0] : false;
    } catch (error) {
        console.log('Error', error.message);
    }
}

const getUserByEmail = async (email) => {
    try {
        const consulta = 'SELECT * FROM usuarios WHERE email = $1'
        const result = await pool.query(consulta, [email])
        return result.rows[0]
    } catch (error) {
        console.log('Error', error.message)
    }
}

const getUserById = async (id) => {
    try {
        const consulta = 'SELECT * FROM usuarios WHERE id = $1'
        const result = await pool.query(consulta, [id])
        return result.rows[0]
    } catch (error) {
        console.log('Error', error.message)
    }
}

export const models = {
    addUser,
    getUserByEmail,
    getUserById
}