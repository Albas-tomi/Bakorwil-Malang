import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const fotoModel = db.define(
  "foto",
  {
    judul: DataTypes.STRING,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default fotoModel;

// (async () => {
//   await db.sync();
// })();
