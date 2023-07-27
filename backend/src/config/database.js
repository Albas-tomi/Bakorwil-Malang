import { Sequelize } from "sequelize";
import "dotenv/config";

const db = new Sequelize("bakorwil3_malang", "root", "", {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

export default db;
