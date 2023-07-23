import express from "express";
import passport from 'passport'
import { Register, login, logout } from "../controller/UserController.js";

const router = express.Router();

router.post('/login', login);
router.post('/register', Register);
router.get('/logout', logout);

export default router;