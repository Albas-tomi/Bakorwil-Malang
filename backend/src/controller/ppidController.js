import ppidModel from "../models/ppidModel.js";
import { response } from "express";

// CONTROLLER GET ALL PPID
export const getPpid = async (req, res) => {
  try {
    const response = await ppidModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET PPID BY ID
export const getPpidById = async (req, res) => {
  try {
    const response = await ppidModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE PPID
export const createPpid = async (req, res) => {
  try {
    await ppidModel.create(req.body);
    res.status(201).json({ messsage: "creating ppid success" });
  } catch (error) {
    res.json({
      message: "creating ppid gagal",
      error: error,
    });
  }
};

// CONTROLLER UPDATE PPID
export const updatePpid = async (req, res) => {
  try {
    await ppidModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "ppid update success" });
  } catch (error) {
    res.json({
      message: "ppid update failed",
      error: error,
    });
  }
};

// CONTROLLER DELETE PPID
export const deletePpid = async (req, res) => {
  try {
    await ppidModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "ppid delete sukses" });
  } catch (error) {
    res.json({
      message: "ppid delete failed",
      error: error,
    });
  }
};
