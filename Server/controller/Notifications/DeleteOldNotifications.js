import { pool } from "../../config/database.js";
import { DeleteOldNotifications } from "../../config/Quries.js";

export const deleteOldNotifications = async (req, res) => {
  try {
    await pool.query(DeleteOldNotifications);
  } catch (error) {
    console.error('Error deleting old notifications:', error);
  }

}
