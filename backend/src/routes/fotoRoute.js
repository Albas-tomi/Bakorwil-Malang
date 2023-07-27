import express from "express";
import {
  getFoto,
  getFotoById,
  createFoto,
  updateFoto,
  deleteFoto,
} from "../controller/fotoController.js";

const router = express.Router();

// ROUTE GET ALL FOTO
router.get("/foto", getFoto);
// ROUTE GET FOTO BY ID
router.get("/foto/:id", getFotoById);
// ROUTE CREATE FOTO 
router.post("/foto", createFoto);
// ROUTE EDIT FOTO 
router.patch("/foto/:id", updateFoto);
// ROUTE DELETE FOTO
router.delete("/foto/:id", deleteFoto);

export default router;