import express from "express";
import PokemonController from "../controller/pokemon.js";
import { body } from 'express-validator';

const router = express.Router();

router.get("/", PokemonController.getAllPokemons);
router.post("/", PokemonController.createPokemon);
router.delete("/:id", PokemonController.deletePokemon);

export default router;
