import dotenv from "dotenv";

dotenv.config();

import express, {
  Request,
  Response,
} from "express";

import cors from "cors";

import { connectRedis } from "./services/redisService";

import authRoutes from "./routes/authRoutes";

import investorRoutes from "./routes/investorRoutes";

import fundRoutes from "./routes/fundRoutes";

import sipRoutes from "./routes/sipRoutes";

import investmentRoutes from "./routes/investmentRoutes";

import { globalErrorHandler } from "./middleware/errorMiddleware";

import { connectDB } from "./database/pgManager";

const app = express();

// =======================================
// MIDDLEWARE
// =======================================

app.use(cors());

app.use(express.json());

// =======================================
// CONNECT DATABASE
// =======================================

connectDB();

connectRedis();

// =======================================
// ROUTES
// =======================================

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/investors",
  investorRoutes
);

app.use(
  "/api/funds",
  fundRoutes
);

app.use(
  "/api/sips",
  sipRoutes
);

app.use(
  "/api/investments",
  investmentRoutes
);

// =======================================
// HEALTH CHECK
// =======================================

app.get(
  "/",
  (
    req: Request,
    res: Response
  ) => {
    res.json({
      success: true,

      message:
        "SIP Tracker Backend Running",
    });
  }
);

// =======================================
// GLOBAL ERROR HANDLER
// =======================================

app.use(globalErrorHandler);

// =======================================
// SERVER
// =======================================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});