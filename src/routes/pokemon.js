import express from "express";
import PokemonController from "../controllers/pokemon.js";
import { body } from 'express-validator';
import findErrors from "../middlewares/validator.js";

const router = express.Router();

/**
 * @swagger
 * /pokemon:
 *   get:
 *     security: 
 *          - BearerAuth: []
 *     summary: Récupérer l'ensemble des arènes.
 *     description: Récupérer l'ensemble des arènes. Vous nécessitez d'être authentifié.
 */
router.get("/", PokemonController.getAllPokemons);

/**
 * @swagger
 * /pokemon/{id}:
 *   get:
 *     security: 
 *          - BearerAuth: []
 *     summary: Récupérer un pokemon via son identifiant.
 *     description: Récupérer un pokemon via son identifiant. Vous nécessitez d'être authentifié.
 */
router.get("/:id", PokemonController.getPokemon);

/**
 * @swagger
 * /pokemon:
 *   post:
 *     security: 
 *          - BearerAuth: []
 *     summary: Ajouter un pokemon.
 *     description: Ajouter un pokemon. Vous nécessitez d'être authentifié.
 */
router.post("/", [
    body("pokedexNumber").trim().isInt(),
    body("generation").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("secondType").trim().optional().isLength({ min: 2, max: 20 }).isAlpha(),
]
, findErrors ,PokemonController.createPokemon);

/**
 * @swagger
 * /pokemon/{id}:
 *   put:
 *     security: 
 *          - BearerAuth: []
 *     summary: Modifier un pokemon via son identifiant.
 *     description: Modifier un pokemon via son identifiant. Vous nécessitez d'être authentifié.
 */
router.put("/:id", [
    body("pokedexNumber").trim().isInt(),
    body("generation").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("secondType").trim().optional().isLength({ min: 2, max: 20 }).isAlpha(),
]
, findErrors, PokemonController.udpatePokemon)

/**
 * @swagger
 * /pokemon/{id}:
 *   delete:
 *     security: 
*          - BearerAuth: []
 *     summary: Supprimer un pokemon via son identifiant.
 *     description: Supprimer un pokemon via son identifiant. Vous nécessitez d'être authentifié.
 */
router.delete("/:id", PokemonController.deletePokemon);

export default router;