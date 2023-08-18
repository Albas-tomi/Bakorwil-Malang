import express from "express";
import {
  getPejabat,
  getPejabatById,
  createPejabat,
  updatePejabat,
  deletePejabat,
} from "../controller/pejabatController.js";

const router = express.Router();

// ROUTE GET ALL PEJABAT
router.get("/pejabat", getPejabat);
// ROUTE GET PEJABAT BY ID
router.get("/pejabat/:id", getPejabatById);
// ROUTE CREATE PEJABAT
router.post("/pejabat", createPejabat);
// ROUTE EDIT PEJABAT
router.patch("/pejabat/:id", updatePejabat);
// ROUTE DELETE PEJABAT
router.delete("/pejabat/:id", deletePejabat);

export default router;
