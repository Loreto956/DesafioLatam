import express from "express";
import { getPost, addPost } from "./models/queries.js";

const router = express.Router();


// Ruta GET para devolver los registros de la tabla posts

router.get('/posts', async (req, res) => {
    try {
        const result = await getPost();
        return res.status(200).json(result);
      } catch (error) {
        return res.status(400).json({ error });
      }
  });

// Ruta POST para recibir y almacenar un nuevo registro en la tabla posts

router.post('/posts', async (req, res) => {
    console.log('Datos recibidos en la solicitud POST:', req.body);

    const { titulo, url, descripcion } = req.body; 
    
    const post = {
        titulo: titulo,
        img: url,
        descripcion: descripcion
    };

    try {
        const response = await addPost(post);
        return res.status(201).json({ data: response });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});


export default router;