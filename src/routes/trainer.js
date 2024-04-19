import express from "express";
import TrainerController from "../controllers/trainer.js";
import { body } from 'express-validator';
import findErrors from "../middlewares/validator.js";

const router = express.Router();

/**
 * @swagger
 * /trainer:
 *   get:
 *     security: 
 *          - BearerAuth: []
 *     summary: Récupérer l'ensemble des arènes.
 *     description: Récupérer l'ensemble des arènes. Vous nécessitez d'être authentifié.
 */
router.get("/", TrainerController.getAllTrainers);

/**
 * @swagger
 * /trainer/{id}:
 *   get:
 *     security: 
 *          - BearerAuth: []
 *     summary: Récupérer un dresseur via son identifiant.
 *     description: Récupérer un dresseur via son identifiant. Vous nécessitez d'être authentifié.
 */
router.get("/:id", TrainerController.getTrainer);

/**
 * @swagger
 * /trainer:
 *   post:
 *     security: 
 *          - BearerAuth: []
 *     summary: Ajouter un dresseur.
 *     description: Ajouter un dresseur. Vous nécessitez d'être authentifié.
 */
router.post("/",  [
    body("age").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("team.*.lvl").trim().isInt(),
    body("team.*.dresseur").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("team").trim().optional().isArray({max: 6}),
] 
, findErrors , TrainerController.createTrainer);

/**
 * @swagger
 * /trainer/{id}:
 *   put:
 *     security: 
 *          - BearerAuth: []
 *     summary: Modifier un dresseur via son identifiant.
 *     description: Modifier un dresseur via son identifiant. Vous nécessitez d'être authentifié.
 */
router.put("/:id", [
    body("age").trim().isInt(),
    body("team").trim().optional().isArray(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
] 
, findErrors, TrainerController.udpateTrainer)

/**
 * @swagger
 * /trainer/{id}:
 *   delete:
 *     security: 
*          - BearerAuth: []
 *     summary: Supprimer un dresseur via son identifiant.
 *     description: Supprimer un dresseur via son identifiant. Vous nécessitez d'être authentifié.
 */
router.delete("/:id", TrainerController.deleteTrainer);

export default router;
