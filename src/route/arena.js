import express from "express";
import ArenaController from "../controller/arena.js";
import { body } from 'express-validator';
import findErrors from "../middleware/validator.js";

const router = express.Router();

router.get("/", ArenaController.getAllArenas);
router.get("/:id", ArenaController.getArena);

router.post("/",  [
    body("region").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("city").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("champion").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("badge").trim().isLength({ min: 2, max: 20 }).isAlpha(),
] 
, findErrors , ArenaController.createArena);

router.put("/:id",[
    body("region").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("city").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("champion").trim().isLength({ min: 2, max: 50 }).isAlpha(),
    body("mainType").trim().isLength({ min: 2, max: 20 }).isAlpha(),
    body("badge").trim().isLength({ min: 2, max: 20 }).isAlpha(),
]
, findErrors , ArenaController.udpateArena)

router.delete("/:id", ArenaController.deleteArena);

export default router;
