import dotenv from 'dotenv'
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDb from './utils/db.js';
dotenv.config({});
// Middlewares
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Define cors options
const corsOption = {
  origin: 'http://localhost:3000',
  credentials: true,
};

// Use the cors middleware with options
app.use(cors(corsOption));
const PORT = process.env.PORT||2000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
