import { pool } from "../../config/database.js";
import {
  RejectGrowthRevisionQuery,
  SaveGrowthRevisionQuery,
} from "../../config/Quries.js";
import { formatTimestampForPostgres } from "../../middleware/formatTimestampForPostgres.js";
import { notificationService } from "../Notifications/SaveNotification.js";

export const SaveGrowthRevision = async (req, res) => {
  const { id, action, projects, userId, tl_id } = req.query;

  const io = req.app.get("io");

  if (!id || !action) {
    return res.status(400).json({ message: "Missing required parameters" });
  }

  const projectList = JSON.parse(projects);

  if (!Array.isArray(projectList) || projectList.length === 0) {
    return res.status(400).json({ message: "Invalid projects format" });
  }

  const notifications = {
    type: 'growth',
    user_id: userId,
    description: 'Growth revision',
    message: `Your growth revision has been ${action}`,
    created_at: formatTimestampForPostgres(new Date()),
    is_read: false,
    id: Date.now()
  }

  await notificationService.saveNotification(userId, tl_id, notifications.type,
    notifications.description, notifications.message, notifications.created_at, notifications.is_read);


  // Emit the notification to the user
  io.to(`user_${userId}`).emit("newNotification", notifications);

  try {
    if (action === "approve") {
      const result = await pool.query(SaveGrowthRevisionQuery, [id]);

      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Growth revision not found" });
      }

      return res
        .status(200)
        .json({ message: "Growth revision approved successfully" });
    } else if (action === "reject") {
      const result = await pool.query(RejectGrowthRevisionQuery, [id]);

      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Growth revision not found" });
      }

      return res
        .status(200)
        .json({ message: "Growth revision rejected successfully" });
    }


  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
