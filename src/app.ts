import express, { Application } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app: Application = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log('Connected to backend');
});
