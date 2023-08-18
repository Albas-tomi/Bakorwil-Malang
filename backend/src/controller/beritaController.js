import beritaModel from "../models/beritaModel.js";
import path from "path";
import fs from "fs";
import { response } from "express";

// CONTROLLER GET ALL BERITA
export const getBerita = async (req, res) => {
  try {
    const response = await beritaModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET BERITA BY ID
export const getBeritaById = async (req, res) => {
  try {
    const response = await beritaModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE BERITA
export const createBerita = (req, res) => {
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
  const url = `${req.protocol}://${process.env.DOMAIN}/beritaImg/${fileName}`;

  // allowed type extension image
  const allowedType = [".png", ".jpg", ".jpeg"];

  // validate images extensions
  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json({ message: "invalid img" });

  // validate images size
  if (fileSize > 3000000)
    return res.status(422).json({ message: "Image must be less than 3 mb" });

  // if all requirements are fulfilled save image to public folder
  img.mv(`./public/beritaImg/${fileName}`, async (err) => {
    // check if there is an error
    if (err) return res.status(500).json({ message: err.message });
    try {
      // if there are no errors save data to database
      await beritaModel.create({
        judul: judul,
        deskripsi: deskripsi,
        gambar: fileName,
        url: url,
      });
      res.status(201).json({ message: "creating berita success" });
    } catch (error) {
      res.json({
        message: "creating berita failed",
        error: error,
      });
    }
  });
};

// CONTROLLER UPDATE BERITA
export const updateBerita = async (req, res) => {
  // cek if there is data by id
  const berita = await beritaModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!berita) return res.status(404).json({ message: "No Data Found" });

  let fileName = "";

  // cek if request image is nothing
  if (req.files === null) {
    // take image filename from the database
    fileName = beritaModel.gambar;
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
    const filepath = `./public/beritaImg/${berita.gambar}`;
    fs.unlinkSync(filepath);

    // save new image
    img.mv(`./public/beritaImg/${fileName}`, (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }

  // request new update
  const judul = req.body.judul;
  const deskripsi = req.body.deskripsi;
  const views = req.body.views;
  const url = `${req.protocol}://${process.env.DOMAIN}/beritaImg/${fileName}`;

  // save update to database
  try {
    await beritaModel.update(
      {
        judul: judul,
        deskripsi: deskripsi,
        views: views,
        gambar: fileName,
        url: url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "berita update successful" });
  } catch (error) {
    res.json({
      message: "document update gagal",
      error: error,
    });
  }
};

// CONTROLLER DELETE BERITA
export const deleteBerita = async (req, res) => {
  const berita = await beritaModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  // cek if there is no data
  if (!berita) return res.status(404).json({ message: "No Data Found" });

  // if there is data
  try {
    const filepath = `./public/beritaImg/${berita.gambar}`;
    // delete image in the filepath
    fs.unlinkSync(filepath);
    // delete image in databases by id
    await beritaModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "berita Deleted Success" });
  } catch (error) {
    res.json({
      message: "berita delete failed",
      Error: error,
    });
  }
};
