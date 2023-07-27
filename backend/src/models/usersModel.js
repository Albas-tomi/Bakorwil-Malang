import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

const usersModel = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    refresh_token: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

export default usersModel;

// async () => {
//   await db.sync();
// };
