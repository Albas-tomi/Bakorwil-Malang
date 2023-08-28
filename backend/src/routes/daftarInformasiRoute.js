import express from "express";
import {
  createDaftarInformasi,
  deleteDaftarInformasi,
  getDaftarInformasi,
  getDaftarInformasiById,
  updateDaftarInformasi,
} from "../controller/daftarInformasiController.js";

const router = express.Router();

// ROUTE GET ALL DaftarInformasi
router.get("/daftarInformasi", getDaftarInformasi);
// ROUTE GET DaftarInformasi BY ID
router.get("/daftarInformasi/:id", getDaftarInformasiById);
// ROUTE CREATE DaftarInformasi
router.post("/daftarInformasi", createDaftarInformasi);
// ROUTE EDIT DaftarInformasi
router.patch("/daftarInformasi/:id", updateDaftarInformasi);
// ROUTE DELETE DaftarInformasi
router.delete("/daftarInformasi/:id", deleteDaftarInformasi);

export default router;
