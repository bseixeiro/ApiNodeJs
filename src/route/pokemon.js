import express from "express";
import PokemonController from "../controller/pokemon.js";
import { body } from 'express-validator';
import findErrors from "../middleware/validator.js";

const router = express.Router();

router.get("/", PokemonController.getAllPokemons);
router.get("/:id", PokemonController.getPokemon);

router.post("/", [
    body("pokedexNumber").trim().isInt(),
    body("generation").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("secondType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
]
, findErrors ,PokemonController.createPokemon);

router.put("/:id", [
    body("pokedexNumber").trim().isInt(),
    body("generation").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("secondType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
]
, findErrors, PokemonController.udpatePokemon)

router.delete("/:id", PokemonController.deletePokemon);

export default router;
