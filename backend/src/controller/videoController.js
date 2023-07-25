import videoModel from "../models/videoModel.js";
import { response } from "express";

// CONTROLLER GET ALL video
export const getVideo = async (req, res) => {
  try {
    const response = await videoModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET video BY ID
export const getVideoById = async (req, res) => {
  try {
    const response = await videoModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE video
export const createVideo = async (req, res) => {
  try {
    await videoModel.create(req.body);
    res.status(201).json({ messsage: "creating video success" });
  } catch (error) {
    res.json({
      message: "creating video gagal",
      error: error,
    });
  }
};

// CONTROLLER UPDATE video
export const updateVideo = async (req, res) => {
  try {
    await videoModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "video update success" });
  } catch (error) {
    res.json({
      message: "video update failed",
      error: error,
    });
  }
};

// CONTROLLER DELETE video
export const deleteVideo = async (req, res) => {
  try {
    await videoModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "video delete sukses" });
  } catch (error) {
    res.json({
      message: "video delete failed",
      error: error,
    });
  }
};
