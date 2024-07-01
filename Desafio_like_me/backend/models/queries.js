import express from "express";
import pool from "../config/db.js";

const app = express ();

app.use(express.json())

try {
    await pool.query('SELECT NOW()');
    console.log('Conectada a database');
  } catch (error) {
    console.error('Error en conexión a database:', error);
  }
  


export const getPost = async () => {
    try {
    const { rows } = await pool.query('SELECT * FROM posts');
  
    return rows;
    } catch (error) {
        return error.message
    }
  };

export const addPost = async(post) => {
    const { titulo, img, descripcion } = post
    console.log(post)
    try {
      const query = `INSERT INTO posts(titulo, img, descripcion,likes) VALUES($1, $2, $3, $4)`
      const values = [titulo, img, descripcion,0]
      const res = await pool.query(query, values)
      console.log("[RESPUESTA DB]: ", res.rows);
      if (res.rowCount > 0) return 'Imagen agregadada correctamente'
    } catch (error) {
      console.log("[ERROR]: ", error.message);
      return error.message
    }
  }

