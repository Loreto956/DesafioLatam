import express from "express";
import { controllers } from "../controllers/controller.js";
const router = express.Router()


router.get('/', controllers.home);

router.get('/posts', controllers.getPost);

router.post('/posts',  controllers.addPost);

router.put('/posts/like/:id', controllers.putLikes);

router.delete('/posts/:id', controllers.reportarConsulta, controllers.deletePost);

router.get('*', controllers.notFound);

export default router;