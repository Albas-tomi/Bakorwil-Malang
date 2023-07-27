import express from "express";
import {
  getVideo,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
} from "../controller/videoController.js";

const router = express.Router();

// ROUTE GET ALL VIDEO
router.get("/video", getVideo);
// ROUTE GET VIDEO BY ID
router.get("/video/:id", getVideoById);
// ROUTE CREATE VIDEO 
router.post("/video", createVideo);
// ROUTE EDIT VIDEO 
router.patch("/video/:id", updateVideo);
// ROUTE DELETE VIDEO 
router.delete("/video/:id", deleteVideo);

export default router;
