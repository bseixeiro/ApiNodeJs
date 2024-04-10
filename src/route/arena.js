import express from "express";
import ArenaController from "../controller/arena.js";
import { body } from 'express-validator';
import findErrors from "../middleware/validator.js";

const router = express.Router();

router.get("/", ArenaController.getAllArenas);
router.get("/:id", ArenaController.getArena);

router.post("/", /* [
    body("pokedexNumber").trim().isInt(),
    body("generation").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("secondType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
] 
, findErrors , */ArenaController.createArena);

router.put("/:id",/* [
    body("pokedexNumber").trim().isInt(),
    body("generation").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("secondType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
]
, findErrors, */ArenaController.udpateArena)

router.delete("/:id", ArenaController.deleteArena);

export default router;
