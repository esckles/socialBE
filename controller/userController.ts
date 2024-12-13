import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      username,
      email,
      password: hashed,
    });
    return res.status(201).json({
      message: "Account created successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error creating account", status: 404 });
  }
};
export const signInUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const deryptedPassword = await bcrypt.compare(password, user.password);
      if (deryptedPassword) {
        return res.status(200).json({
          message: "welcome back",
          data: user,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "incorrect password",
          data: user,
          status: 201,
        });
      }
    } else {
      return res.status(404).json({
        message: "error",
        data: user,
        status: 201,
      });
    }
  } catch (error) {
    return res.status(404).json({ message: "Error with login", status: 404 });
  }
};

export const readOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const user = await userModel.findById(userID);
    return res.status(200).json({
      message: "Reading users",
      data: user,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({ message: "Error reading user", status: 404 });
  }
};
export const readAllUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.find();
    return res.status(200).json({
      message: "Reading all users",
      data: user,
      status: 200,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error reading all users", status: 404 });
  }
};
