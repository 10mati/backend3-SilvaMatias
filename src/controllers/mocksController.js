import MockingService from '../services/mocking.service.js';

export const getMockingPets = (req, res) => {
  res.send('Mocking pets endpoint');
};

export const getMockingUsers = async (req, res) => {
  try {
    const users = await MockingService.generateMockUsers(50);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error generating mock users' });
  }
};

export const generateData = async (req, res) => {
  try {
    const { users, pets } = req.body;
    const result = await MockingService.generateData(users, pets);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error generating data' });
  }
};
