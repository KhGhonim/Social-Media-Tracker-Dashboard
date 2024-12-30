import cron from "node-cron";
import { pool } from "../../../config/database.js";
import { ResetCheckInAndOut } from "../../../config/Quries.js";

export const task = cron.schedule("0 0 * * *", async () => {
  try {
    await pool.query(ResetCheckInAndOut);
  } catch (error) {
    console.error("Error resetting check-in status:", error);
  }
});
