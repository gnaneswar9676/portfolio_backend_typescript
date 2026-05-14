import { createClient } from "redis";

// =======================================
// REDIS CLIENT
// =======================================

export const redisClient =
  createClient({
    url:
      "redis://127.0.0.1:6379",
  });

// =======================================
// REDIS EVENTS
// =======================================

redisClient.on(
  "connect",
  () => {
    console.log(
      "Redis connected successfully"
    );
  }
);

redisClient.on(
  "error",
  (err: Error) => {
    console.log(
      "Redis Error:",
      err
    );
  }
);

// =======================================
// CONNECT REDIS
// =======================================

export const connectRedis =
  async (): Promise<void> => {

    if (
      !redisClient.isOpen
    ) {
      await redisClient.connect();
    }
  };