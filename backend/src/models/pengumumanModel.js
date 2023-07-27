import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const pengumumanModel = db.define(
  "pengumuman",
  {
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default pengumumanModel;

// (async () => {
//   await db.sync();
// })();
