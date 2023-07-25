import express from "express";
import {
  getDokumen,
  getDokumenById,
  createDokumen,
  updateDokumen,
  deleteDokumen,
} from "../controller/dokumenController.js";

const router = express.Router();

// ROUTE GET ALL DOKUMEN
router.get("/dokumen", getDokumen);
// ROUTE GET dokumen BY ID
router.get("/dokumen/:id", getDokumenById);
// ROUTE CREATE dokumen 
router.post("/dokumen", createDokumen);
// ROUTE EDIT dokumen 
router.patch("/dokumen/:id", updateDokumen);
// ROUTE DELETE dokumen
router.delete("/dokumen/:id", deleteDokumen);

export default router;