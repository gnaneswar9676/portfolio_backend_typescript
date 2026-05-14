import {
  Request,
  Response,
  NextFunction,
} from "express";

import { verifyJWT } from "../utility/authManager";

import {
  errorResponse,
} from "../utility/responseHandler";

// =======================================
// CUSTOM REQUEST TYPE
// =======================================

export interface AuthRequest
  extends Request {
  user?: {
    investor_id: number;

    email: string;

    role: string;
  };
}

// =======================================
// AUTHENTICATE USER
// =======================================

export const authenticateUser =
  (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Response | void => {
    try {
      const authHeader =
        req.headers.authorization;

      if (!authHeader) {
        return errorResponse(
          res,
          401,
          "Token missing"
        );
      }

      const token =
        authHeader.split(" ")[1];

      if (!token) {
        return errorResponse(
          res,
          401,
          "Invalid token format"
        );
      }

      const decoded =
        verifyJWT(token);

      req.user = decoded;

      next();
    } catch (error) {
      return errorResponse(
        res,
        401,
        "Invalid or expired token"
      );
    }
  };

// =======================================
// AUTHORIZE ROLE
// =======================================

export const authorizeRole =
  (...roles: string[]) => {
    return (
      req: AuthRequest,
      res: Response,
      next: NextFunction
    ): Response | void => {
      if (
        !req.user ||
        !roles.includes(
          req.user.role
        )
      ) {
        return errorResponse(
          res,
          403,
          "Access denied"
        );
      }

      next();
    };
  };