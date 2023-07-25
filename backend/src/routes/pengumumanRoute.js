import express from "express";
import {
  getPengumuman,
  getPengumumanById,
  createPengumuman,
  updatePengumuman,
  deletePengumuman,
} from "../controller/pengumumanController.js";

const router = express.Router();

// ROUTE GET ALL PENGUMUMAN
router.get("/pengumuman", getPengumuman);
// ROUTE GET PENGUMUMAN BY ID
router.get("/pengumuman/:id", getPengumumanById);
// ROUTE CREATE PENGUMUMAN 
router.post("/pengumuman", createPengumuman);
// ROUTE EDIT PENGUMUMAN 
router.patch("/pengumuman/:id", updatePengumuman);
// ROUTE DELETE PENGUMUMAN 
router.delete("/pengumuman/:id", deletePengumuman);

export default router;
