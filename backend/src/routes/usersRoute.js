import express from "express";
import {
  getUsers,
  createUsers,
  loginUsers,
  logoutUsers,
} from "../controller/authentication/usersController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controller/authentication/refreshToken.js";

const router = express.Router();

// ROUTE GET ALL USERS
router.get("/users", verifyToken, getUsers);
// ROUTE CREATE USERS
router.post("/users", createUsers);
// ROUTE LOGIN USERS
router.post("/login", loginUsers);
// ROUTE TOKEN
router.get("/token", refreshToken);
// ROUTE LOGOUT
router.delete("/logout", logoutUsers);

export default router;
