import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import Pet from '../models/pet.model.js';

async function generateMockUsers(number) {
  const users = [];
  for (let i = 0; i < number; i++) {
    const user = {
      username: faker.internet.userName(),
      password: await bcrypt.hash('coder123', 10),
      role: faker.random.arrayElement(['user', 'admin']),
      pets: []
    };
    users.push(user);
  }
  return users;
}

async function generateData(usersNumber, petsNumber) {
  const users = await generateMockUsers(usersNumber);
  const usersInserted = await User.insertMany(users);

  const pets = Array.from({ length: petsNumber }, () => ({
    name: faker.name.firstName(),
    type: faker.random.arrayElement(['dog', 'cat', 'rabbit']),
  }));
  const petsInserted = await Pet.insertMany(pets);

  return { users: usersInserted, pets: petsInserted };
}

export default { generateMockUsers, generateData };
