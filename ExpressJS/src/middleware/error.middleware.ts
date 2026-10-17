import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import AppError from "../errors/app.error";

const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: error.issues.map(({ path, message }) => ({
        field: path.join("."),
        message,
      })),
    });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  console.error(error);

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

export default errorMiddleware;
