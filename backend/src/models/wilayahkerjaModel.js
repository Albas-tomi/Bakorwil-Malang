import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const wilayahkerjaModel = db.define(
  "wilayahkerja",
  {
    judul: DataTypes.STRING,
    link: DataTypes.STRING,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default wilayahkerjaModel;

// (async () => {
//   await db.sync();
// })();
