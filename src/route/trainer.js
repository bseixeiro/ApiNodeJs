import express from "express";
import TrainerController from "../controller/trainer.js";
import { body } from 'express-validator';
import findErrors from "../middleware/validator.js";

const router = express.Router();

router.get("/", TrainerController.getAllTrainers);
router.get("/:id", TrainerController.getTrainer);

router.post("/",  [
    body("age").trim().isInt(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("team.*.lvl").trim().isInt(),
    body("team.*.pokemon").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("team").trim().optional().isArray({max: 6}),
] 
, findErrors , TrainerController.createTrainer);

router.put("/:id", [
    body("age").trim().isInt(),
    body("team").trim().optional().isArray(),
    body("name").trim().isLength({ min: 2, max: 50 }).isAlpha(),
] 
, findErrors, TrainerController.udpateTrainer)

router.delete("/:id", TrainerController.deleteTrainer);

export default router;
