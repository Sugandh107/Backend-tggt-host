import express from 'express';
import { createUser, getUsers } from '../controllers/userController';

const router = express.Router();

// Create user route
router.post('/users', createUser);

// Get all users route
router.get('/users', getUsers);

export default router;
