import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const ppidModel = db.define(
  "ppid",
  {
    judul: DataTypes.STRING,
    link: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default ppidModel;

// (async () => {
//   await db.sync();
// })();
