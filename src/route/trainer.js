import express from "express";
import AuthController from "../controller/auth.js";
import { body } from 'express-validator';

const router = express.Router();

router.post("/signin", AuthController.signin);
router.post("/signup", AuthController.signup);

export default router;
