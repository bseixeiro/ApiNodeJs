import express from "express";
import ArenaController from "../controllers/arena.js";
import { body } from 'express-validator';
import findErrors from "../middlewares/validator.js";

const router = express.Router();

/**
 * @swagger
 * /arena:
 *   get:
 *     security: 
*          - BearerAuth: []
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
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
