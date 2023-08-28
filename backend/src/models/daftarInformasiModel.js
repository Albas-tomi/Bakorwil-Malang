import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const daftarInformasiModel = db.define(
  "daftarinformasi",
  {
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    link: DataTypes.STRING,
    jenisKategori: DataTypes.STRING,
    kategori: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default daftarInformasiModel;

(async () => {
  await db.sync();
})();
