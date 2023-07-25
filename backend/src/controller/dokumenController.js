import dokumenModel from "../models/dokumenModel.js";
import { response } from "express";

// CONTROLLER GET ALL DOKUMEN
export const getDokumen = async (req, res) => {
  try {
    const response = await dokumenModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET DOKUMEN BY ID
export const getDokumenById = async (req, res) => {
  try {
    const response = await dokumenModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE DOKUMEN
export const createDokumen = async (req, res) => {
  try {
    await dokumenModel.create(req.body);
    res.status(201).json({ messsage: "creating dokumen success" });
  } catch (error) {
    res.json({
      message: "creating dokumen gagal",
      error: error,
    });
  }
};

// CONTROLLER UPDATE DOKUMEN
export const updateDokumen = async (req, res) => {
  try {
    await dokumenModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "dokumen update success" });
  } catch (error) {
    res.json({
      message: "dokumen update failed",
      error: error,
    });
  }
};

// CONTROLLER DELETE DOKUMEN
export const deleteDokumen = async (req, res) => {
  try {
    await dokumenModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "dokumen delete sukses" });
  } catch (error) {
    res.json({
      message: "dokumen delete failed",
      error: error,
    });
  }
};
