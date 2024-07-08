import {pool} from '../config/db.js'


const getPost = async () => {
  const consulta = "SELECT * FROM posts";
  try {
    const response = await pool.query(consulta);
    if (response.rowCount > 0) {
      return response.rows;
    }
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.error('Error de conexión a la base de datos:', error.message);
    } else {
    console.log(error)
    }
  }
};


const addPost = async ( titulo, img, descripcion, likes ) => {
  const consulta =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [titulo, img, descripcion, 0];

  try {
    const response = await pool.query(consulta, values);
    
    if (response.rowCount > 0) {
      return response.rows[0];
    }
  } catch (error) {
    console.log('Error', error.code, 'Error message',error.message);
  }
};

// Se hace solo update de likes para que se mantengan la cantidad de likes al refrescar la página
const updateLikes = async (id) => {
  try {
    const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
    const values = [id];
    const response = await pool.query(consulta, values);
    if (response.rowCount > 0) {
      return response.rows[0]
    } else {
      throw new Error ("Post no encontrado")
    }
  } catch (error) {
    console.log(error.message)
    throw error
  }
};

const deletePost = async (id) => {
  try {
    const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *"
    const values = [id]
    const response = await pool.query(consulta, values)
    if (response.rowCount > 0) {
      return response.rows
    } else {
      return null
    }
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export const models = {
  getPost,
  addPost,
  updateLikes,
  deletePost
}