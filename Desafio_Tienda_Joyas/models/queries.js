import { pool } from '../config/db.js'
import format from 'pg-format';

const validColumns = ['id', 'nombre', 'categoria', 'metal', 'precio', 'stock'];

const getJoyas = async ({limits = 10, page = 1, order_by = 'id_asc'}) => {
    const [campo, orden] = order_by.split('_')
    const column = validColumns.includes(campo) ? campo : 'id'
    const sortOrder = orden.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
    const offset = (page - 1) * limits
    const query = format("SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s", campo, orden, limits, offset)
    try {
        const response = await pool.query(query);
        const totalQuery = 'SELECT COUNT(*) FROM inventario';
        const totalResult = await pool.query(totalQuery);
        const totalJoyas = parseInt(totalResult.rows[0].count, 10);
        const stockTotal = response.rows.reduce((total, joya) => total + joya.stock, 0);
        
        const results = response.rows.map(joya => ({
            name: joya.nombre,
            href: `/joyas/joya/${joya.id}`
        }));

        return {
            totalJoyas,
            stockTotal,
            results
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getFiltroJoyas = async (precio_min, precio_max, categoria, metal) => {
    try {
        const query = `SELECT * FROM inventario WHERE precio BETWEEN $1 AND $2 AND categoria = $3 AND metal = $4`
        const result = await pool.query(query, [precio_min, precio_max, categoria, metal])
        return result.rows
    } catch (error) {
        console.log( 'Error en fitrar', error)
        throw error
    }
};

const getJoyaById = async (id) => {
    try {
        const query = 'SELECT * FROM inventario WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    } catch (error) {
        console.error ('Error en buscar ID joyas', error)
        throw error
    }    
};

export const models = {
    getJoyas,
    getFiltroJoyas,
    getJoyaById
}