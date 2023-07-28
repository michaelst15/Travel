import express from "express";
import { Register, login, logout } from "../controller/UserController.js";

const router = express.Router();
// router.use(cookieParse());
// router.use(cors({
//     origin: [""],
//     methods: ["POST, GET"],
//     credentials: true,
// }));



router.post('/login', login);
router.post('/register', Register);
router.get('/logout', logout);

export default router;