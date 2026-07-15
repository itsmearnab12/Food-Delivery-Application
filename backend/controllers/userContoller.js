import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//Controller function for login user
const loginUser = async (req, res) => {};

//Controller function for register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //Checking user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validating email format & strong password
  } catch (error) {}
};

export { loginUser, registerUser };
