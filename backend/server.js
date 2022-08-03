
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const workoutRoute = require('./routes/workouts');

dotenv.config()
//connect to database
connectDB();

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors())
app.use(morgan('tiny'))

//routes

app.use('/api/workouts',workoutRoute)

//listen server
const port  = process.env.PORT || 4000 ;

app.listen(port,console.log(`server is running on port ${port}`.bgYellow.bold))