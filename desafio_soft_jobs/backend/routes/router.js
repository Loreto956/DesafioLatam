import express from 'express';
import { controllers } from '../controllers/controller.js';
import { authenticateToken } from '../middlewares/authmiddleware.js';

const router = express.Router()

router.post('/usuarios', controllers.register);

router.post('/login', controllers.login);

router.get('/usuarios', controllers.getUser)

router.get('/perfil', authenticateToken, controllers.profile);

router.get('/', controllers.home);

router.get('*', controllers.notFound);

export default router;