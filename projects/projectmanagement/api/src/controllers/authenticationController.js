import User from "../models/User.js";
import { formatJoiErrors } from "../utils/formatJoiErrors.js";
import {
  loginValidation,
  registerValidation
} from "../validations/authenticationValidations.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  // step 1 validation
  const { error } = registerValidation.validate(req.body, {
    abortEarly: false
  });

  if (error) {
    const errors = formatJoiErrors(error);
    return res.status(400).json({
      message: "Validation error",
      errors
    });
  }

  try {
    const { name, email, password } = req.body;

    // Check existing user email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    // Make new user if not existing user
    const user = new User({ name, email, password });
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(201).json({
      message:
        "User created successfully, Please wait you are being redirected to login page",
      user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

export const login = async (req, res) => {
  const { error } = loginValidation.validate(req.body, {
    abortEarly: false
  });

  if (error) {
    const errors = formatJoiErrors(error);
    return res.status(400).json({
      message: "Validation error",
      errors
    });
  }

  const { email, password } = req.body;
  try {
    // Step 1: Check existing email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials"
      });
    }

    // Checking password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials"
      });
    }

    // Make token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    // Make cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });

    // Redirect to dashboard
    return res.status(200).json({
      message:
        "Login successfully, please wait you are being redirected to Dashboard",
      user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

export const whoami = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json({
      user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message:
        "Logout successfully, please wait you are being redirected to Login page"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
