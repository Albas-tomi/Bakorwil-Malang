import { response } from "express";
import daftarInformasiModel from "../models/daftarInformasiModel.js";

export const getDaftarInformasi = async (req, res) => {
  try {
    const response = await daftarInformasiModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

export const getDaftarInformasiById = async (req, res) => {
  try {
    const response = await daftarInformasiModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

export const createDaftarInformasi = async (req, res) => {
  try {
    await daftarInformasiModel.create(req.body);
    res.status(201).json({ messsage: "creating Daftar Informasi success" });
  } catch (error) {
    res.json({
      message: "creating Daftar Informasi gagal",
      error: error,
    });
  }
};

export const updateDaftarInformasi = async (req, res) => {
  try {
    await daftarInformasiModel.update(req.body, {
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

export const deleteDaftarInformasi = async (req, res) => {
  try {
    await daftarInformasiModel.destroy({
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
