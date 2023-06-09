import express from "express";
const router = express.Router();
import {authUser} from "../controllers/userController.js";

router.post('/auth', authUser);  // http://localhost:5000/api/users/auth

export default router;