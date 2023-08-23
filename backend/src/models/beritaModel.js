import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const beritaModel = db.define(
  "berita",
  {
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
    views: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default beritaModel;

(async () => {
  await db.sync();
})();
