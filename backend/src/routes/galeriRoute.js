import express from "express";
import {
  getGaleri,
  getGaleriById,
  createGaleri,
  updateGaleri,
  deleteGaleri,
} from "../controller/galeriController.js";

const router = express.Router();

// ROUTE GET ALL GALERI
router.get("/galeri", getGaleri);
// ROUTE GET galeri BY ID
router.get("/galeri/:id", getGaleriById);
// ROUTE CREATE galeri 
router.post("/galeri", createGaleri);
// ROUTE EDIT galeri 
router.patch("/galeri/:id", updateGaleri);
// ROUTE DELETE galeri
router.delete("/galeri/:id", deleteGaleri);

export default router;