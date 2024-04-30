const express = require ('express');
const dotenv = require ('dotenv').config();

//PORT
const PORT = process.env.PORT || 5050;
const colors = require ('colors');
const morgan = require ('morgan');
const cors = require ('cors');
const connectDB = require('./config/db');


//MONGODB CONNECTION
connectDB();

//rest object
const app = express();


//MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));

//ROUTES
//1. test route
app.use('/api/user', require('./routes/testRoutes'));
app.use('/api/v1/auth', require("./routes/authRoutes"));


//LISTEN
app.listen(PORT, () => {
  console.log (`Node Server Running In ModeOn Port ${PORT}`);
}) ;
