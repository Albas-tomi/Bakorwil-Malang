import programModel from "../models/programModel.js";
import { response } from "express";

// CONTROLLER GET ALL PROGRAM
export const getProgram = async (req, res) => {
  try {
    const response = await programModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET PROGRAM BY ID
export const getProgramById = async (req, res) => {
  try {
    const response = await programModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE PROGRAM
export const createProgram = async (req, res) => {
  try {
    await programModel.create(req.body);
    res.status(201).json({ messsage: "creating program success" });
  } catch (error) {
    res.json({
      message: "creating program gagal",
      error: error,
    });
  }
};

// CONTROLLER UPDATE PROGRAM
export const updateProgram = async (req, res) => {
  try {
    await programModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "program update success" });
  } catch (error) {
    res.json({
      message: "program update failed",
      error: error,
    });
  }
};

// CONTROLLER DELETE PROGRAM
export const deleteProgram = async (req, res) => {
  try {
    await programModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "program delete sukses" });
  } catch (error) {
    res.json({
      message: "program delete failed",
      error: error,
    });
  }
};
