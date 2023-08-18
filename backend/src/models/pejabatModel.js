import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const pejabatModel = db.define(
  "pejabat",
  {
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    kategori: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default pejabatModel;

(async () => {
  await db.sync();
})();