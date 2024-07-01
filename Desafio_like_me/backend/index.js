import express from "express";
import cors from "cors";
import router from "./router.js";
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();
// console.log({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
//   });


const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get('/' , (req, res) => {
  res.send('Bienvenido a Likeme')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

