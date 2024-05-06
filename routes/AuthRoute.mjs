// import Signup from "../Controllers/AuthController.mjs"


import AuthController from "../Controllers/AuthController.mjs";
import authMiddelware from "../middlewares/authMiddleware.mjs";
import express from "express";

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", AuthController.registerController);

//LOGIN || POST
router.post("/login", AuthController.loginController);

//GET CURRENT USER || GET
router.get("/current-user", authMiddelware, AuthController.currentUserController);

export default router;