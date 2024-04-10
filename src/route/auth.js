import express from "express";
import AuthController from "../controller/auth.js";
import { body } from 'express-validator';
import findErrors from "../middleware/validator.js";

const router = express.Router();

router.post("/signin", body("email").trim().isEmail().isLength({min: 5, max: 50}), findErrors , AuthController.signin);
router.post("/signup", [
    body("email").trim().isEmail().isLength({min: 5, max: 50}),
    body("name").trim().isAlpha().isLength({min: 2, max: 20}),
    body("phoneNumber").trim().isMobilePhone(),
], findErrors , AuthController.signup);

export default router;
