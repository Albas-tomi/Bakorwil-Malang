import express from "express";
import {
  getProgram,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
} from "../controller/programController.js";

const router = express.Router();

// ROUTE GET ALL PROGRAM
router.get("/program", getProgram);
// ROUTE GET PROGRAM BY ID
router.get("/program/:id", getProgramById);
// ROUTE CREATE PROGRAM 
router.post("/program", createProgram);
// ROUTE EDIT PROGRAM 
router.patch("/program/:id", updateProgram);
// ROUTE DELETE PROGRAM 
router.delete("/program/:id", deleteProgram);

export default router;
