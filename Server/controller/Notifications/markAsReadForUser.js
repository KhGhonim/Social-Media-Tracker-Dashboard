import { pool } from "../../config/database.js";
import { MarkNotificationAsRead } from "../../config/Quries.js";

export const markAsReadForUserController = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: "Invalid request" });
  }

  try {

    const result = await pool.query(MarkNotificationAsRead, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Notification not found" });
    }

    return res.status(200).json({ message: "Notification marked as read successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });

  }

}
