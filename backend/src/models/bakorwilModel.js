import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const bakorwilModel = db.define(
  "bakorwil",
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

export default bakorwilModel;

// (async () => {
//   await db.sync();
// })();
