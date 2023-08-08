import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const videoModel = db.define(
  "video",
  {
    judul: DataTypes.STRING,
    link: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default videoModel;

// (async () => {
//   await db.sync();
// })();
