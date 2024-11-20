import { Router } from "express";
import { generatePets } from "../utils/mockingPets.js";
import { generateUsers } from "../utils/mockingUsers.js";
import Pet from "../dao/models/Pet.js"; // Modelo de mascotas
import User from "../dao/models/User.js"; // Modelo de usuarios

const router = Router();

// Cantidades a generar
const cantidadMascotas = 100;
const cantidadUsuarios = 50;

// Endpoint POST para generar e insertar mascotas
router.post("/mockingpets", async (req, res) => {
  try {
    const pets = Array.from({ length: cantidadMascotas }, () => generatePets());

    // Inserta las mascotas generadas en la base de datos
    const insertedPets = await Pet.insertMany(pets);
    res.status(201).json({
      message: "Mascotas generadas e insertadas con éxito",
      pets: insertedPets,
    });
  } catch (error) {
    console.error("Error al guardar mascotas:", error);
    res.status(500).json({ message: "Error al guardar mascotas", error });
  }
});

// Endpoint GET para obtener todas las mascotas
router.get("/mockingpets", async (req, res) => {
  try {
    const pets = await Pet.find(); // Recupera todas las mascotas de la base de datos
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener mascotas", error });
  }
});

// Endpoint POST para generar e insertar usuarios
router.post("/mockingusers", async (req, res) => {
  try {
    const users = Array.from({ length: cantidadUsuarios }, () =>
      generateUsers()
    );

    // Inserta los usuarios generados en la base de datos
    const insertedUsers = await User.insertMany(users);
    res.status(201).json({
      message: "Usuarios generados e insertados con éxito",
      users: insertedUsers,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar usuarios", error });
  }
});

// Endpoint GET para obtener todos los usuarios
router.get("/mockingusers", async (req, res) => {
  try {
    const users = await User.find(); // Recupera todos los usuarios de la base de datos
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
});

export default router;
