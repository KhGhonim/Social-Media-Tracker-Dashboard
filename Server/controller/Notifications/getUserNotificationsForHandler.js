import { pool } from "../../config/database.js";
import { GetUserNotificationsPerHandler } from "../../config/Quries.js";

export const getUserNotificationsForHandler = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).json({ error: "User ID is required, please Login again" });
  }

  try {
    const result = await pool.query(GetUserNotificationsPerHandler, [userId]);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error getting notifications:', error);
    return [];
  }
}
