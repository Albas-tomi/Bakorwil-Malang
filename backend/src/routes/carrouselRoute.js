import express from "express";
import {
  getCarrousel,
  getCarrouselById,
  createCarrousel,
  updateCarrousel,
  deleteCarrousel,
} from "../controller/carrouselController.js";

const router = express.Router();

// ROUTE GET ALL CARROUSEL
router.get("/carrousel", getCarrousel);
// ROUTE GET CARROUSEL BY ID
router.get("/carrousel/:id", getCarrouselById);
// ROUTE CREATE CARROUSEL 
router.post("/carrousel", createCarrousel);
// ROUTE EDIT CARROUSEL 
router.patch("/carrousel/:id", updateCarrousel);
// ROUTE DELETE CARROUSEL
router.delete("/carrousel/:id", deleteCarrousel);

export default router;