import express from "express";
import { uploadImage } from "../controllers/file.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/image", uploadImage);

export default router;
