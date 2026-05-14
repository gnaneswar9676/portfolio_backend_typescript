import jwt from "jsonwebtoken";

// =======================================
// TYPES
// =======================================

interface JwtPayload {
  investor_id: number;

  email: string;

  role: string;
}

// =======================================
// GENERATE TOKEN
// =======================================

export const generateToken = (
  payload: JwtPayload
): string => {

  return jwt.sign(
    payload,

    process.env.JWT_SECRET as string,

    {
      expiresIn: "1d",
    }
  );
};

// =======================================
// VERIFY TOKEN
// =======================================

export const verifyJWT = (
  token: string
): JwtPayload => {

  return jwt.verify(
    token,

    process.env.JWT_SECRET as string
  ) as JwtPayload;
};