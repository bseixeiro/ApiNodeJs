import express from "express";
import AuthController from "../controllers/auth.js";
import { body } from 'express-validator';
import findErrors from "../middlewares/validator.js";

const router = express.Router();

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     security: 
*          - BearerAuth: []
 *     summary: Connexion
 *     description: Connexion pour avoir un token afin de s'identifier pour utiliser l'api
 */
router.post("/signin", body("email").trim().isEmail().isLength({min: 5, max: 50}), findErrors , AuthController.signin);

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     security: 
*          - BearerAuth: []
 *     summary: Inscritpion.
 *     description: Inscrivez vous dans notre base de données pour pouvoir utiliser notre api
 */
router.post("/signup", [
    body("email").trim().isEmail().isLength({min: 5, max: 50}),
    body("name").trim().isAlpha().isLength({min: 2, max: 20}),
    body("phoneNumber").trim().isMobilePhone(),
], findErrors , AuthController.signup);

export default router;
