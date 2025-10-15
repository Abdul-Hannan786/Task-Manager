import express from "express";
import { adminOnly, protect } from "../middlewares/authMiddleware.js";
import { getUserById, getUsers } from "../controllers/userController.js";

const router = express.Router();

// User Management Routes
router.get("/", protect, adminOnly, getUsers);   // Get All Users (Admin Only)
router.get("/:id", protect, adminOnly, getUserById);   // Get Specific User

export default router;
