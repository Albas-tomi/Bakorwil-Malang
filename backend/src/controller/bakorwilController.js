import bakorwilModel from "../models/bakorwilModel.js";
import path from "path";
import fs from "fs";
import { response } from "express";

// CONTROLLER GET ALL BAKORWIL
export const getBakorwil = async (req, res) => {
  try {
    const response = await bakorwilModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET BAKORWIL BY ID
export const getBakorwilById = async (req, res) => {
  try {
    const response = await bakorwilModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE BAKORWIL
export const createBakorwil = (req, res) => {
  // check if request file nothing
  if (req.files === null)
    return res.status(400).json({ message: "no file uploaded" });

  // request
  const judul = req.body.judul;
  const link = req.body.link;
  const img = req.files.img;
  const fileSize = img.size;

  // filename and url
  const ext = path.extname(img.name);
  const timestamp = new Date().getTime();
  const fileName = img.md5 + timestamp + ext;
  const url = `${req.protocol}://${process.env.DOMAIN}/bakorwilImg/${fileName}`;

  // allowed type extension image
  const allowedType = [".png", ".jpg", ".jpeg"];

  // validate images extensions
  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json({ message: "invalid img" });

  // validate images size
  if (fileSize > 3000000)
    return res.status(422).json({ message: "Image must be less than 3 mb" });

  // if all requirements are fulfilled save image to public folder
  img.mv(`./public/bakorwilImg/${fileName}`, async (err) => {
    // check if there is an error
    if (err) return res.status(500).json({ message: err.message });
    try {
      // if there are no errors save data to database
      await bakorwilModel.create({
        judul: judul,
        link: link,
        gambar: fileName,
        url: url,
      });
      res.status(201).json({ message: "creating bakorwil success" });
    } catch (error) {
      res.json({
        message: "creating bakorwil failed",
        error: error,
      });
    }
  });
};

// CONTROLLER UPDATE BAKORWIL
export const updateBakorwil = async (req, res) => {
  // cek if there is data by id
  const bakorwil = await bakorwilModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!bakorwil) return res.status(404).json({ message: "No Data Found" });

  let fileName = "";

  // cek if request image is nothing
  if (req.files === null) {
    // take image filename from the database
    fileName = bakorwilModel.gambar;
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
    const filepath = `./public/bakorwilImg/${bakorwil.gambar}`;
    fs.unlinkSync(filepath);

    // save new image
    img.mv(`./public/bakorwilImg/${fileName}`, (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }

  // request new update
  const judul = req.body.judul;
  const link = req.body.link;
  const url = `${req.protocol}://${process.env.DOMAIN}/bakorwilImg/${fileName}`;

  // save update to database
  try {
    await bakorwilModel.update(
      { judul: judul, link: link, gambar: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "bakorwil update successful " });
  } catch (error) {
    res.json({
      message: "bakorwil update failed",
      Error: error,
    });
  }
};

// CONTROLLER DELETE BAKORWIL
export const deleteBakorwil = async (req, res) => {
  const bakorwil = await bakorwilModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  // cek if there is no data
  if (!bakorwil) return res.status(404).json({ message: "No Data Found" });

  // if there is data
  try {
    const filepath = `./public/bakorwilImg/${bakorwil.gambar}`;
    // delete image in the filepath
    fs.unlinkSync(filepath);
    // delete image in databases by id
    await bakorwilModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "bakorwil Deleted Success" });
  } catch (error) {
    res.json({
      message: "bakorwil delete failed",
      Error: error,
    });
  }
};