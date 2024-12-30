import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 5432,
  max: 120, // number of clients in the pool
  idleTimeoutMillis: 30000,
  ssl: { rejectUnauthorized: false },

});

