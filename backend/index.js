import cors from 'cors'
import dotenv from 'dotenv'
import { connect } from 'mongoose';
import connectDB from './config/db.js';
import express from 'express';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Shield Backend is running');
});

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});