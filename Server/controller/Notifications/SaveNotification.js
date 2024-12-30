import { pool } from "../../config/database.js";
import { SaveNotification } from "../../config/Quries.js";

export const notificationService = {
  async saveNotification(userId, tl_id, type, desc, message, created_at, is_read) {
    try {
      await pool.query(SaveNotification, [userId, tl_id, type, desc, message, created_at, is_read]);
    } catch (error) {
      console.error('Error saving notification:', error);
    }
  },


};