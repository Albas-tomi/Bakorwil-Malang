import pejabatModel from "../models/pejabatModel.js";
import { response } from "express";

// CONTROLLER GET ALL PEJABAT
export const getPejabat = async (req, res) => {
  try {
    const response = await pejabatModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET PEJABAT BY ID
export const getPejabatById = async (req, res) => {
  try {
    const response = await pejabatModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE PEJABAT
export const createPejabat = async (req, res) => {
  try {
    await pejabatModel.create(req.body);
    res.status(201).json({ message: "creating pejabat success" });
  } catch (error) {
    res.json({
      message: "creating pejabat gagal",
      error: error,
    });
  }
};

// CONTROLLER UPDATE PEJABAT
export const updatePejabat = async (req, res) => {
  try {
    await pejabatModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "update pejabat success",
    });
  } catch (error) {
    res.json({
      message: "update pejabat gagal",
      error: error,
    });
  }
};

// CONTROLLER DELETE PEJABAT
export const deletePejabat = async (req, res) => {
  try {
    await pejabatModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({
      message: "pejabat delete success",
    });
  } catch (error) {
    res.json({
      message: "pejabat delete failed",
      error: error,
    });
  }
};
