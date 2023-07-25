import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const dokumenModel = db.define(
  "dokumen",
  {
    judul: DataTypes.STRING,
    link: DataTypes.STRING,
    // gambar: DataTypes.STRING,
    // url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default dokumenModel;

// (async () => {
//   await db.sync();
// })();
