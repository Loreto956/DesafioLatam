import express from "express";
import cors from "cors";
import routes from "./routes/router.js";
import "dotenv/config";


const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

