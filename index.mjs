import express from 'express';
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from "./routes/users.mjs";
import connectDB from './config/db.mjs';
import colors from 'colors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import AuthRoute from "./routes/AuthRoute.mjs"
import InventoryRoute from "./routes/InventoryRoute.mjs"

//rest object
const app = express();

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));


// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


// use the routes module as a middleware
// for the /Users path
app.use("/users", routes);
// app.use("/", AuthRoute);
app.use("/", AuthRoute);
app.use("/inventory", InventoryRoute)


// Load environment variables from .env file
dotenv.config();


//MONGODB CONNECTION
connectDB();


//MIDDLEWARES
app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'));
app.use(cors());
app.use(morgan('dev'));



//LISTEN
// Start server
app.get("/", (req, res) => res.json("Hello world!"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Node Server Running In Mode On Port ${PORT}`);
});


// const port = process.env.PORT || 3000; // Default to port 3000 if PORT environment variable is not set

// const server = app.listen(port, '0.0.0.0', () => {
//   console.log(`Server is running on port ${port}`);
// });

