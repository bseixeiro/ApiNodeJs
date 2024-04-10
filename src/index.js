import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./route/auth.js"

const app = express();

const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

// Middleware pour parser les données en json venant du corps de la requête
app.use(express.json());

// Authentification
app.use("/auth", authRoutes);

// Connexion à la BDD
mongoose.connect(MONGO_STRING).then(() => {
    console.log("Connected to the database!");
  
    // On lance le serveur
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });