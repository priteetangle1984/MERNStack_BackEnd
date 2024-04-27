const express = require ('express');
const dotenv = require ('dotenv');
const colors = require ('colors');
const morgan = require ('morgan');
const cors = require ('cors');

//DOT CONFIG
dotenv.config();

//rest object
const app = express();


//MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//ROUTES
//1. test route
app.use('/api/v1/test', require('./routes/testRoutes'));

//PORT
const PORT = process.env.PORT || 5050;

//LISTEN
app.listen(PORT, () => {
  console.log (`Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`);
}) ;