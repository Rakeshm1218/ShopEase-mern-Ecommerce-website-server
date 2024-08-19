import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//import routes
import userRoutes from './routes/userRoutes.js'


//connect DB
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 4000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors())


//Routes
app.use('/api/users', userRoutes);

//default route
app.get('/', (req, res) => {
    res.send('Hello from the server!');
})


app.listen(port, () => console.log('Server is running at port ' + port));
