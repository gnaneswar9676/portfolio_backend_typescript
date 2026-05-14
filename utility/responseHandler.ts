import { Response } from "express";

// =======================================
// SUCCESS RESPONSE
// =======================================

export const successResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data: any = null
): Response => {

  return res.status(statusCode).json({
    success: true,

    message,

    data,
  });
};

// =======================================
// ERROR RESPONSE
// =======================================

export const errorResponse = (
  res: Response,
  statusCode: number,
  message: string
): Response => {

  return res.status(statusCode).json({
    success: false,

    message,
  });
};