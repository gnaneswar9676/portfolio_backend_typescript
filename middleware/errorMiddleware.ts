import {
  Request,
  Response,
  NextFunction,
} from "express";

// =======================================
// GLOBAL ERROR HANDLER
// =======================================

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {

  console.log(err);

  return res.status(500).json({
    success: false,

    message: "Internal server error",
  });
};