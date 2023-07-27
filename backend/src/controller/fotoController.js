import fotoModel from "../models/fotoModel.js";
import path from "path";
import fs from "fs";
import { response } from "express";

// CONTROLLER GET ALL foto
export const getFoto = async (req, res) => {
  try {
    const response = await fotoModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET foto BY ID
export const getFotoById = async (req, res) => {
  try {
    const response = await fotoModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE foto
export const createFoto = (req, res) => {
  // check if request file nothing
  if (req.files === null)
    return res.status(400).json({ message: "no file uploaded" });

  // request
  const judul = req.body.judul;
  const img = req.files.img;
  const fileSize = img.size;

  // filename and url
  const ext = path.extname(img.name);
  const timestamp = new Date().getTime();
  const fileName = img.md5 + timestamp + ext;
  const url = `${req.protocol}://${process.env.DOMAIN}/fotoImg/${fileName}`;

  // allowed type extension image
  const allowedType = [".png", ".jpg", ".jpeg"];

  // validate images extensions
  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json({ message: "invalid img" });

  // validate images size
  if (fileSize > 3000000)
    return res.status(422).json({ message: "Image must be less than 3 mb" });

  // if all requirements are fulfilled save image to public folder
  img.mv(`./public/fotoImg/${fileName}`, async (err) => {
    // check if there is an error
    if (err) return res.status(500).json({ message: err.message });
    try {
      // if there are no errors save data to database
      await fotoModel.create({
        judul: judul,
        gambar: fileName,
        url: url,
      });
      res.status(201).json({ message: "creating foto success" });
    } catch (error) {
      res.json({
        message: "creating foto failed",
        error: error,
      });
    }
  });
};

// CONTROLLER UPDATE foto
export const updateFoto = async (req, res) => {
  // cek if there is data by id
  const foto = await fotoModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!foto) return res.status(404).json({ message: "No Data Found" });

  let fileName = "";

  // cek if request image is nothing
  if (req.files === null) {
    // take image filename from the database
    fileName = fotoModel.gambar;
  } else {
    // if update image
    const img = req.files.img;
    const fileSize = img.size;
    const ext = path.extname(img.name);
    const timestamp = new Date().getTime();
    fileName = img.md5 + timestamp + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    // validate extensions image
    if (!allowedType.includes(ext.toLocaleLowerCase()))
      return res.status(422).json({ message: "invalid img" });

    // validate images size
    if (fileSize > 3000000)
      return res.status(422).json({ message: "Image must be less than 3 mb" });

    // delete old image
    const filepath = `./public/fotoImg/${foto.gambar}`;
    fs.unlinkSync(filepath);

    // save new image
    img.mv(`./public/fotoImg/${fileName}`, (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }

  // request new update
  const judul = req.body.judul;
  const url = `${req.protocol}://${process.env.DOMAIN}/fotoImg/${fileName}`;

  // save update to database
  try {
    await fotoModel.update(
      { judul: judul, gambar: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "foto Updated Successfully" });
  } catch (error) {
    res.json({
      message: "foto update gagal",
      error: error,
    });
  }
};

// CONTROLLER DELETE foto
export const deleteFoto = async (req, res) => {
  const foto = await fotoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  // cek if there is no data
  if (!foto) return res.status(404).json({ message: "No Data Found" });

  // if there is data
  try {
    const filepath = `./public/fotoImg/${foto.gambar}`;
    // delete image in the filepath
    fs.unlinkSync(filepath);
    // delete image in databases by id
    await fotoModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "foto Deleted Success" });
  } catch (error) {
    res.json({
      message: "foto deleted gagal",
      Error: error,
    });
  }
};
