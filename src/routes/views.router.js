import express from 'express';
import { getMockingPets, getMockingUsers, generateData } from '../controllers/mocksController.js';

const router = express.Router();

router.get('/mockingpets', getMockingPets);
router.get('/mockingusers', getMockingUsers);
router.post('/generateData', generateData);

export default router;

