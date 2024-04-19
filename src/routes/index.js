import { Router } from "express";
import authRouter from "./auth.js";
import pokemonRouter from "./pokemon.js";
import trainerRouter from "./trainer.js";
import arenaRouter from "./arena.js";
import isAuth from "../middlewares/auth.js";
// import fileRouter from "./file.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/pokemon", isAuth, pokemonRouter);

router.use("/trainer", isAuth, trainerRouter);

router.use("/arena", isAuth, arenaRouter);
// router.use("/uploads", fileRouter);

export default router;
