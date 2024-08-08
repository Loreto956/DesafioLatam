import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { models } from '../models/queries.js';

const notFound = (req, res) => {
    res.status(404).send('Not found')
}

const home = (req, res) => {
    res.send('Home Page')
}

const register = async (req, res) => {
    const { email, password, rol, lenguage } = req.body
    try {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const user = await models.addUser({ email, password: hashedPassword, rol, lenguage })
        if (user) {
             res.status(201).json({ message: 'Usuario registrado exitosamente'})
        } else {
            res.status(400).json({ message: 'Error al registrar usuario' })
        }
    } catch (error) {
        console.error('Error al registrar usuario', error.message)
        res.status(500).json({ message: 'Error interno del servidor'})
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await models.getUserByEmail(email)

        if (!user) {
            return res.status(401).json({ message: 'Credencial inválida' });
        }
    
        const validPassword = await bcrypt.compare(password, user.password);
    
        if (!validPassword) {
            return res.status(401).json({ message: 'Credencial inválida' });
        }

        const token = jwt.sign(
            { email: user.email, rol: user.rol, lenguage: user.lenguage },
            process.env.JWT_SECRET,
            { expiresIn: '5m' }
        )

        res.json ({ 
            message: `Bienvenido ${user.email} ${user.rol} en ${user.lenguage}`,
            token 
        })

    } catch (error) {
        console.error('Error en logear', error.message)
        res.status(500).json({ message: 'Error interno del servidor'})
    }
}

const getUser = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const email = decoded.email
        const user = await models.getUserByEmail(email)
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado'})
        }
        res.json([user])
    } catch (error) {
        console.error('Error al obtener usuario', error.message)
        res.status(500).json({ message:'Error interno del servidor'})
    }
}

const profile = async (req, res) => {
    const userId = req.user.id
    const user = await models.getUserById(userId)
    res.json(user)
}

export const controllers = {
    notFound,
    home,
    register,
    login,
    getUser,
    profile
}