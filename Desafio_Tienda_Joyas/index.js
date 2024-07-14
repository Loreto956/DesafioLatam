import express from "express";
import routes from "./routes/router.js"
import "dotenv/config"
import morgan from "morgan"


const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(morgan('dev'))
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });