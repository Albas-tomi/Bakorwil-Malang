import galeriModel from "../models/galeriModel.js";
import path from "path";
import fs from "fs";
import { response } from "express";

// CONTROLLER GET ALL GALERI
export const getGaleri = async (req, res) => {
  try {
    const response = await galeriModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET GALERI BY ID
export const getGaleriById = async (req, res) => {
  try {
    const response = await galeriModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE GALERI
export const createGaleri = (req, res) => {
  // check if request file nothing
  if (req.files === null)
    return res.status(400).json({ message: "no file uploaded" });

  // request
  const judul = req.body.judul;
  const kategori = req.body.kategori;
  const img = req.files.img;
  const fileSize = img.size;

  // filename and url
  const ext = path.extname(img.name);
  const timestamp = new Date().getTime();
  const fileName = img.md5 + timestamp + ext;
  const url = `${req.protocol}://${process.env.DOMAIN}/galeriImg/${fileName}`;

  // allowed type extension image
  const allowedType = [".png", ".jpg", ".jpeg"];

  // validate images extensions
  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json({ message: "invalid img" });

  // validate images size
  if (fileSize > 3000000)
    return res.status(422).json({ message: "Image must be less than 3 mb" });

  // if all requirements are fulfilled save image to public folder
  img.mv(`./public/galeriImg/${fileName}`, async (err) => {
    // check if there is an error
    if (err) return res.status(500).json({ message: err.message });
    try {
      // if there are no errors save data to database
      await galeriModel.create({
        judul: judul,
        kategori: kategori,
        gambar: fileName,
        url: url,
      });
      res.status(201).json({ message: "creating galeri success" });
    } catch (error) {
      res.json({
        message: "creating galeri failed",
        error: error,
      });
    }
  });
};

// CONTROLLER UPDATE galeri
export const updateGaleri = async (req, res) => {
  // cek if there is data by id
  const galeri = await galeriModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!galeri) return res.status(404).json({ message: "No Data Found" });

  let fileName = "";

  // cek if request image is nothing
  if (req.files === null) {
    // take image filename from the database
    fileName = galeriModel.gambar;
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
    const filepath = `./public/galeriImg/${galeri.gambar}`;
    fs.unlinkSync(filepath);

    // save new image
    img.mv(`./public/galeriImg/${fileName}`, (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }

  // request new update
  const judul = req.body.judul;
  const kategori = req.body.kategori;
  const url = `${req.protocol}://${process.env.DOMAIN}/galeriImg/${fileName}`;

  // save update to database
  try {
    await galeriModel.update(
      { judul: judul, kategori: kategori, gambar: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "galeri Updated Successfully" });
  } catch (error) {
    res.json({
      message: "galeri update gagal",
      error: error.message,
    });
  }
};

// CONTROLLER DELETE GALERI
export const deleteGaleri = async (req, res) => {
  const galeri = await galeriModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  // cek if there is no data
  if (!galeri) return res.status(404).json({ message: "No Data Found" });

  // if there is data
  try {
    const filepath = `./public/galeriImg/${galeri.gambar}`;
    // delete image in the filepath
    fs.unlinkSync(filepath);
    // delete image in databases by id
    await galeriModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "galeri Deleted Success" });
  } catch (error) {
    res.json({
      message: "galeri deleted gagal",
      Error: error,
    });
  }
};
