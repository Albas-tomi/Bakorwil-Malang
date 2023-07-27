import usersModel from "../../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { refreshToken } from "./refreshToken.js";

// CONTROLLER GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await usersModel.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

// CONTROLLER CREATE USERS
export const createUsers = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword)
    return res.status(400).json({
      message: `password and confirm password doesn't match`,
    });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await usersModel.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({
      message: "create users success",
    });
  } catch (error) {
    res.json({
      message: "create users failed",
    });
  }
};

// CONTROLLER LOGIN USERS
export const loginUsers = async (req, res) => {
  try {
    const user = await usersModel.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ message: "wrong password" });
    const userid = user[0].id;
    const name = user[0].name;
    const email = user[0].email;

    const accessToken = jwt.sign(
      { userid, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "20s" }
    );
    const refreshToken = jwt.sign(
      { userid, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    await usersModel.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userid,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({
      message: "email doesn't found!",
    });
  }
};

// CONTROLLER LOGOUT USERS
export const logoutUsers = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await usersModel.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userid = user[0].id;
  await usersModel.update(
    { refresh_token: null },
    {
      where: {
        id: userid,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
