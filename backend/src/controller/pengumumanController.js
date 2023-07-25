import pengumumanModel from "../models/pengumumanModel.js";
import path from "path";
import fs from "fs";
import { response } from "express";

// CONTROLLER GET ALL PENGUMUMAN
export const getPengumuman = async (req, res) => {
  try {
    const response = await pengumumanModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

// CONTROLLER GET PENGUMUMAN BY ID
export const getPengumumanById = async (req, res) => {
  try {
    const response = await pengumumanModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE PENGUMUMAN
export const createPengumuman = (req, res) => {
  // check if request file nothing
  if (req.files === null)
    return res.status(400).json({ message: "no file uploaded" });

  // request
  const judul = req.body.judul;
  const deskripsi = req.body.deskripsi;
  const img = req.files.img;
  const fileSize = img.size;

  // filename and url
  const ext = path.extname(img.name);
  const timestamp = new Date().getTime();
  const fileName = img.md5 + timestamp + ext;
  const url = `${req.protocol}://${process.env.DOMAIN}/pengumumanImg/${fileName}`;

  // allowed type extension image
  const allowedType = [".png", ".jpg", ".jpeg"];

  // validate images extensions
  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json({ message: "invalid img" });

  // validate images size
  if (fileSize > 3000000)
    return res.status(422).json({ message: "Image must be less than 3 mb" });

  // if all requirements are fulfilled save image to public folder
  img.mv(`./public/pengumumanImg/${fileName}`, async (err) => {
    // check if there is an error
    if (err) return res.status(500).json({ message: err.message });
    try {
      // if there are no errors save data to database
      await pengumumanModel.create({
        judul: judul,
        deskripsi: deskripsi,
        gambar: fileName,
        url: url,
      });
      res.status(201).json({ message: "creating pengumuman success" });
    } catch (error) {
      res.json({
        message: "creating pengumuman failed",
        error: error,
      });
    }
  });
};

// CONTROLLER UPDATE PENGUMUMAN
export const updatePengumuman = async (req, res) => {
  // cek if there is data by id
  const pengumuman = await pengumumanModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!pengumuman) return res.status(404).json({ message: "No Data Found" });

  let fileName = "";

  // cek if request image is nothing
  if (req.files === null) {
    // take image filename from the database
    fileName = pengumumanModel.gambar;
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
    const filepath = `./public/pengumumanImg/${pengumuman.gambar}`;
    fs.unlinkSync(filepath);

    // save new image
    img.mv(`./public/pengumumanImg/${fileName}`, (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }

  // request new update
  const judul = req.body.judul;
  const deskripsi = req.body.deskripsi;
  const url = `${req.protocol}://${process.env.DOMAIN}/pengumumanImg/${fileName}`;

  // save update to database
  try {
    await pengumumanModel.update(
      { judul: judul, deskripsi: deskripsi, gambar: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Pengumuman Updated Successfully" });
  } catch (error) {
    res.json({
      message: "pengumuman update gagal",
      error: error,
    });
  }
};

// CONTROLLER DELETE PENGUMUMAN
export const deletePengumuman = async (req, res) => {
  const pengumuman = await pengumumanModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  // cek if there is no data
  if (!pengumuman) return res.status(404).json({ message: "No Data Found" });

  // if there is data
  try {
    const filepath = `./public/pengumumanImg/${pengumuman.gambar}`;
    // delete image in the filepath
    fs.unlinkSync(filepath);
    // delete image in databases by id
    await pengumumanModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Pengumuman Deleted Success" });
  } catch (error) {
    res.json({
      message: "pengumuman delete gagal",
      Error: error,
    });
  }
};
