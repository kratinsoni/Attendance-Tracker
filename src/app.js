import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';

// dotenv.config("./.env");

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());


export default app;