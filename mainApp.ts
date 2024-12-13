import { Application, Request, Response } from "express";

export const mainApp = async (app: Application) => {
  try {
    app.use("/api");
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({ message: "Welcome to Friends APP" });
      } catch (error) {
        res.status(404).json({ message: "Error" });
      }
    });
  } catch (error) {
    return error;
  }
};
