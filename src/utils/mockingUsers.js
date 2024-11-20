import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

// Genera usuarios ficticios con datos aleatorios usando faker
export const generateUsers = () => {
  // Hashear la contraseña "coder123"
  const hashedPassword = bcrypt.hashSync("coder123", 10);

  return {
    id: faker.database.mongodbObjectId(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: hashedPassword,
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: [],
  };
};
