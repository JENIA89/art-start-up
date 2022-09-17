import express, { Application } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

const app: Application = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log('Connected to backend');
});
