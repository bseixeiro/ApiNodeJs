import express from "express";
import ArenaController from "../controllers/arena.js";
import { body } from 'express-validator';
import findErrors from "../middlewares/validator.js";

const router = express.Router();

/**
 * @swagger
 * /arena:
 *   get:
 *     security: 
*          - BearerAuth: []
 *     summary: Récupérer l'ensemble des arènes.
 *     description: Récupérer l'ensemble des arènes. Vous nécessitez d'être authentifié.
 */
router.get("/", ArenaController.getAllArenas);

/**
 * @swagger
 * /arena/{id}:
 *   get:
 *     security: 
*          - BearerAuth: []
 *     summary: Récupérer une arène via son identifiant.
 *     description: Récupérer une arène via son identifiant. Vous nécessitez d'être authentifié.
 */
router.get("/:id", ArenaController.getArena);

/**
 * @swagger
 * /arena:
 *   post:
 *     security: 
*          - BearerAuth: []
 *     summary: Ajouter une arène.
 *     description: Ajouter une arène. Vous nécessitez d'être authentifié.
 */
router.post("/",  [
    body("region").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("city").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("champion").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("badge").trim().isLength({ min: 2, max: 20 }).isAlpha(),
] 
, findErrors , ArenaController.createArena);

/**
 * @swagger
 * /arena/{id}:
 *   put:
 *     security: 
*          - BearerAuth: []
 *     summary: Modifier une arène via son identifiant.
 *     description: Modifier une arène via son identifiant. Vous nécessitez d'être authentifié.
 */
router.put("/:id",[
    body("region").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("city").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("champion").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("badge").trim().isLength({ min: 2, max: 20 }).isAlpha(),
]
, findErrors , ArenaController.udpateArena)

/**
 * @swagger
 * /arena/{id}:
 *   delete:
 *     security: 
*          - BearerAuth: []
 *     summary: Supprimer une arène via son identifiant.
 *     description: Supprimer une arène via son identifiant. Vous nécessitez d'être authentifié.
 */
router.delete("/:id", ArenaController.deleteArena);

export default router;
