import { Router } from "express";
import authRouter from "./auth.js";
import pokemonRouter from "./pokemon.js";
import trainerRouter from "./trainer.js";
import arenaRouter from "./arena.js";
// import fileRouter from "./file.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/pokemon", pokemonRouter);

router.use("/trainer", trainerRouter);

router.use("/arena", arenaRouter);
// router.use("/uploads", fileRouter);

export default router;
