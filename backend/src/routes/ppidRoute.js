import express from "express";
import {
  getPpid,
  getPpidById,
  createPpid,
  updatePpid,
  deletePpid,
} from "../controller/ppidController.js";

const router = express.Router();

// ROUTE GET ALL PPID
router.get("/ppid", getPpid);
// ROUTE GET PPID BY ID
router.get("/ppid/:id", getPpidById);
// ROUTE CREATE PPID 
router.post("/ppid", createPpid);
// ROUTE EDIT PPID 
router.patch("/ppid/:id", updatePpid);
// ROUTE DELETE PPID 
router.delete("/ppid/:id", deletePpid);

export default router;
