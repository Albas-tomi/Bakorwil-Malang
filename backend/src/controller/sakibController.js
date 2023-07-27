import sakibModel from "../models/sakibModel.js";
import { response } from "express";

// CONTROLLER GET ALL SAKIB
export const getSakib = async (req, res) => {
  try {
    const response = await sakibModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET SAKIB BY ID
export const getSakibById = async (req, res) => {
  try {
    const response = await sakibModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE SAKIB
export const createSakib = async (req, res) => {
  try {
    await sakibModel.create(req.body);
    res.status(201).json({ messsage: "creating sakib success" });
  } catch (error) {
    res.json({
      message: "creating sakib gagal",
      error: error,
    });
  }
};

// CONTROLLER UPDATE SAKIB
export const updateSakib = async (req, res) => {
  try {
    await sakibModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "sakib update success" });
  } catch (error) {
    res.json({
      message: "sakib update failed",
      error: error,
    });
  }
};

// CONTROLLER DELETE SAKIB
export const deleteSakib = async (req, res) => {
  try {
    await sakibModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "sakib delete sukses" });
  } catch (error) {
    res.json({
      message: "sakib delete failed",
      error: error,
    });
  }
};
