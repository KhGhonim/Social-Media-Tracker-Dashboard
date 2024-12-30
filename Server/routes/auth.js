import express from "express";
import authMiddleware from "../middleware/JWT.js";
import { login } from "../controller/SignIn/SignInController.js";
import { logout } from "../controller/LogOut/LogOutController.js";

const router = express.Router();

// Auth routes
router.post("/login", login);
router.post("/logout", logout);



export default router;
