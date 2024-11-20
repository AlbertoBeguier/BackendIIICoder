import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import mocksRouter from "./routes/mocks.router.js";

const app = express();
dotenv.config();

// Puerto de la app
const PORT = process.env.PORT || 8080;

// Configuración de strictQuery para evitar advertencias
mongoose.set("strictQuery", true);

// Conexión con MongoDB
mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://aabeguier:5279167134@clustercoder.kzn29.mongodb.net/ProyectoCoder?retryWrites=true&w=majority&appName=ClusterCoder",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error conectando a MongoDB", err));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Rutas principales
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);

// Rutas de mocks
app.use("/api/mocks", mocksRouter);

// Iniciar el servidor
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
