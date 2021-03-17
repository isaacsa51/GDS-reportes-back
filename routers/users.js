import express, { Router } from "express";

import {
  createUser,
  getUsers,
  getUserID,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

// All routes in here are starting with /users

// Get all users
router.get("/", getUsers);

// Get a certain user via ID
router.get("/:id", getUserID);

// Add a new user
router.post("/", createUser);

// Update a user via ID
router.patch("/:id", updateUser);

// Delete a user using his ID
router.delete("/:id", deleteUser);

export default router;
