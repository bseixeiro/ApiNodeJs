import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./route/auth.js";
import pokemonRoutes from "./route/pokemon.js"
import trainerRoutes from "./route/trainer.js"
import arenaRoutes from "./route/arena.js"

const app = express();

const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

// Middleware pour parser les données en json venant du corps de la requête
app.use(express.json());

// Authentification
app.use("/auth", authRoutes);

// Routage
app.use("/pokemon", pokemonRoutes);
app.use("/trainer", trainerRoutes);
app.use("/arena", arenaRoutes);

// Connexion à la BDD
mongoose.connect(MONGO_STRING).then(() => {
    console.log("Connected to the database!");
  
    // On lance le serveur
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });