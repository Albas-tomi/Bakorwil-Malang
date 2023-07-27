import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const videoModel = db.define(
  "video",
  {
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    link: DataTypes.STRING,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default videoModel;

// (async () => {
//   await db.sync();
// })();
