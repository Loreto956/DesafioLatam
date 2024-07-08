import { models } from "../models/queries.js";

const notFound = (req, res) => {
    res.status(404).send("Not found")
}

const reportarConsulta = async (req, res, next) => { 
    const parametros = req.params
    const url = req.url
    console.log(`
    Hoy ${new Date()}
    Se ha eliminado con éxtio de la ruta ${url} con los parámetros:
    `, parametros)
    next()
    }

const home = (req, res) => {
    res.send( "Bienvenido a LikeMe")
}

const getPost = async (req, res) => {
    try {
        const response = await models.getPost()
        res.status(200).json(response)
    }catch (error) {
        res.status(500).send(error.message)
    }
}

const addPost = async(req, res) => {
    try {
        const { titulo, img, descripcion} = req.body
        const response = await models.addPost(titulo, img, descripcion)
        res.status(200).json(response)
        console.log(req.body)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const putLikes = async (req, res) => {
    try {
        const {id} = req.params
        const {titulo, img, descripcion, likes} = req.body
        const updatePost = await models.updateLikes(id, titulo, img, descripcion, likes)
        res.status(200).json(updatePost)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const deletePost = async (req, res) => {
    try {
        const {id} = req.params
        if (isNaN(id)){
            return res.status(400).json({error : "ID inválido, debe ser un número"})
        }

        const response = await models.deletePost(id)
        if (response) {
            res.status(200).json("Producto eliminado exitosamente")
        } else {
            res.status(404).json({ error:"Post no encontrado"})
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const controllers = {
    notFound,
    reportarConsulta,
    home,
    getPost,
    addPost,
    putLikes,
    deletePost
}