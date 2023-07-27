import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const carrouselModel = db.define(
  "carrousel",
  {
    judul: DataTypes.STRING,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default carrouselModel;

// (async () => {
//   await db.sync();
// })();
