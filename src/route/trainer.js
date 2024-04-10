import express from "express";
import TrainerController from "../controller/trainer.js";
import { body } from 'express-validator';
import findErrors from "../middleware/validator.js";

const router = express.Router();

router.get("/", TrainerController.getAllTrainers);
router.get("/:id", TrainerController.getTrainer);

router.post("/", /* [
    body("pokedexNumber").trim().isInt(),
    body("generation").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("secondType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
] 
, findErrors , */TrainerController.createTrainer);

router.put("/:id",/* [
    body("pokedexNumber").trim().isInt(),
    body("generation").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("secondType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
]
, findErrors, */TrainerController.udpateTrainer)

router.delete("/:id", TrainerController.deleteTrainer);

export default router;
