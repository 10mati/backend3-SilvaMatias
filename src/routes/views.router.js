import express from 'express';
import MockingService from '../services/mocking.service.js';


const router = express.Router();

// Mover el endpoint /mockingpets aquí
router.get('/mockingpets', (req, res) => {
  res.send('Mocking pets endpoint');
});

router.get('/mockingusers', async (req, res) => {
  const users = await MockingService.generateMockUsers(50);
  res.json(users);
});

router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;
  const result = await MockingService.generateData(users, pets);
  res.json(result);
});

export default router;
