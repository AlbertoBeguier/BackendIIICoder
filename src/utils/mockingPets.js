import { faker } from "@faker-js/faker";

// Genera una mascota ficticia con datos aleatorios usando Faker
export const generatePets = () => {
  // Obtener la especie y una URL de imagen basada en ella
  const specie = faker.animal.type(); // Especies como 'dog', 'cat', etc.
  const imageUrl = `https://loremflickr.com/320/240/${specie}`; // Imagen basada en la especie

  return {
    id: faker.database.mongodbObjectId(), // ID único simulado de MongoDB
    name: faker.animal.petName(), // Nombre aleatorio de mascota
    specie, // Especie (dog, cat, rabbit, etc.)
    birthDate: faker.date.birthdate({ mode: "age", min: 1, max: 20 }),
    image: imageUrl, // URL de una imagen de la mascota
    adopted: false, // Estado inicial de adopción
  };
};
