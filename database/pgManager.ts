import { Client } from "pg";

import dotenv from "dotenv";

dotenv.config();

export const client = new Client({
  host: process.env.DB_HOST,

  port: Number(process.env.DB_PORT),

  database: process.env.DB_NAME,

  user: process.env.DB_USER,

  password: process.env.DB_PASSWORD,

  ssl: {
    rejectUnauthorized: false,
  },
});

export const connectDB =
  async (): Promise<void> => {
    try {
      await client.connect();

      console.log(
        "PostgreSQL Connected Successfully"
      );

      const result =
        await client.query(
          "SELECT NOW()"
        );

      console.log(result.rows);
    } catch (error: any) {
      console.error(
        "Database Connection Error:",
        error.message
      );
    }
  };