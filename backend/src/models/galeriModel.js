import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const galeriModel = db.define(
  "galeri",
  {
    judul: DataTypes.STRING,
    kategori: DataTypes.STRING,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default galeriModel;

// (async () => {
//   await db.sync();
// })();
