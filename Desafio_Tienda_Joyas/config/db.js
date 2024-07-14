import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const config = {
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT,
    allowExitOnIdle: true,
}

export const pool = new Pool(config);

try {
    await pool.query("SELECT NOW()")
    console.log('Conectado a Base de Datos')
} catch (error) {
    console.log(error.message)
}