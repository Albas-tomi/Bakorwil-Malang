import express from "express";
import {
  getBerita,
  getBeritaById,
  createBerita,
  updateBerita,
  deleteBerita,
} from "../controller/beritaController.js";

const router = express.Router();

// ROUTE GET ALL BERITA
router.get("/berita", getBerita);
// ROUTE GET BERITA BY ID
router.get("/berita/:id", getBeritaById);
// ROUTE CREATE BERITA 
router.post("/berita", createBerita);
// ROUTE EDIT BERITA 
router.patch("/berita/:id", updateBerita);
// ROUTE DELETE BERITA
router.delete("/berita/:id", deleteBerita);

export default router;