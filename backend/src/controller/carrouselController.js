import carrouselModel from "../models/carrouselModel.js";
import path from "path";
import fs from "fs";
import { response } from "express";

// CONTROLLER GET ALL carrousel
export const getCarrousel = async (req, res) => {
  try {
    const response = await carrouselModel.findAll();
    res.json(response);
  } catch (error) {
    res.json(error.message);
  }
};

// CONTROLLER GET carrousel BY ID
export const getCarrouselById = async (req, res) => {
  try {
    const response = await carrouselModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    response;
  }
};

// CONTROLLER CREATE carrousel
export const createCarrousel = (req, res) => {
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
  const url = `${req.protocol}://${process.env.DOMAIN}/carrouselImg/${fileName}`;

  // allowed type extension image
  const allowedType = [".png", ".jpg", ".jpeg"];

  // validate images extensions
  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json({ message: "invalid img" });

  // validate images size
  if (fileSize > 3000000)
    return res.status(422).json({ message: "Image must be less than 3 mb" });

  // if all requirements are fulfilled save image to public folder
  img.mv(`./public/carrouselImg/${fileName}`, async (err) => {
    // check if there is an error
    if (err) return res.status(500).json({ message: err.message });
    try {
      // if there are no errors save data to database
      await carrouselModel.create({
        judul: judul,
        gambar: fileName,
        url: url,
      });
      res.status(201).json({ message: "creating carrousel success" });
    } catch (error) {
      res.json({
        message: "creating carrousel failed",
        error: error,
      });
    }
  });
};

// CONTROLLER UPDATE carrousel
export const updateCarrousel = async (req, res) => {
  // cek if there is data by id
  const carrousel = await carrouselModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!carrousel) return res.status(404).json({ message: "No Data Found" });

  let fileName = "";

  // cek if request image is nothing
  if (req.files === null) {
    // take image filename from the database
    fileName = carrouselModel.gambar;
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
    const filepath = `./public/carrouselImg/${carrousel.gambar}`;
    fs.unlinkSync(filepath);

    // save new image
    img.mv(`./public/carrouselImg/${fileName}`, (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }

  // request new update
  const judul = req.body.judul;
  const url = `${req.protocol}://${process.env.DOMAIN}/carrouselImg/${fileName}`;

  // save update to database
  try {
    await carrouselModel.update(
      { judul: judul, gambar: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "carrousel Updated Successfully" });
  } catch (error) {
    res.json({
      message: "carrousel update gagal",
      error: error,
    });
  }
};

// CONTROLLER DELETE carrousel
export const deleteCarrousel = async (req, res) => {
  const carrousel = await carrouselModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  // cek if there is no data
  if (!carrousel) return res.status(404).json({ message: "No Data Found" });

  // if there is data
  try {
    const filepath = `./public/carrouselImg/${carrousel.gambar}`;
    // delete image in the filepath
    fs.unlinkSync(filepath);
    // delete image in databases by id
    await carrouselModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "carrousel Deleted Success" });
  } catch (error) {
    res.json({
      message: "carrousel deleted gagal",
      Error: error,
    });
  }
};
