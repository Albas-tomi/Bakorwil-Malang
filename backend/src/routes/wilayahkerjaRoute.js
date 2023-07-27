import express from "express";
import {
  getWilayahkerja,
  getWilayahkerjaById,
  createWilayahkerja,
  updateWilayahkerja,
  deleteWilayahkerja,
} from "../controller/wilayahkerjaController.js";

const router = express.Router();

// ROUTE GET ALL WILAYAH KERJA
router.get("/wilayahkerja", getWilayahkerja);
// ROUTE GET WILAYAH KERJA BY ID
router.get("/wilayahkerja/:id", getWilayahkerjaById);
// ROUTE CREATE WILAYAH KERJA 
router.post("/wilayahkerja", createWilayahkerja);
// ROUTE EDIT WILAYAH KERJA 
router.patch("/wilayahkerja/:id", updateWilayahkerja);
// ROUTE DELETE WILAYAH KERJA
router.delete("/wilayahkerja/:id", deleteWilayahkerja);

export default router;