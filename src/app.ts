import express, { Application } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import rootRoute from './routes/index';

const app: Application = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(cors());

app.use('/', rootRoute);

app.listen(process.env.PORT, () => {
  console.log('Connected to backend');
});
