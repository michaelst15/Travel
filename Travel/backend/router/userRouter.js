import express from "express";
import passport from 'passport'
import { Register, login } from "../controller/UserController.js";

const router = express.Router();

router.post('/login', login);
router.post('/register', Register);

export default router;