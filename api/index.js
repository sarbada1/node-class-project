import express from 'express';
import cors from 'cors';
import webRoute from './router/web.js';
import dotenv from 'dotenv';
import connection from './database/connection.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', webRoute);
connection();
const port= process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})