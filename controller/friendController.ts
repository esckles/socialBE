import { Request, Response } from "express";

export const addAsFriend = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res
      .status(201)
      .json({ message: "Friend added successfully", status: 201 });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error creating friend", status: 404 });
  }
};
