import express from 'express';
import { register, login, profile } from '../controllers/auth';
import { loginValidation, registerValidation } from '../validation/auth';

const router = express.Router();

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.get('/profile', profile);

export default router;
