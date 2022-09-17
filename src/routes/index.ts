import express from 'express';
import authRoute from './auth';

const router = express.Router();

router.post('auth', authRoute);

export default router;
