import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connect } from 'mongoose';
import connectDB from './config/db';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Shield Backend is running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});