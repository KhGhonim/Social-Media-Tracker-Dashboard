import { pool } from "../../../config/database.js";
<<<<<<< HEAD
import { MakeUserCheckOut } from "../../../config/Quries.js";

export const CheckOut = async (req, res) => {
  let { isCheckedIn } = req.query;
  const { id } = req.body;
=======
import { GetTeamLeader, MakeUserCheckOut } from "../../../config/Quries.js";
import { formatTimestampForPostgres } from "../../../middleware/formatTimestampForPostgres.js";
import { notificationService } from "../../Notifications/SaveNotification.js";

export const CheckOut = async (req, res) => {
  let { isCheckedIn, projects } = req.query;
  const { id } = req.body;
  const io = req.app.get('io');
>>>>>>> 1c510ab (Sockets and Updates)

  try {
    if (isCheckedIn) {
      isCheckedIn = false;
      const user = await pool.query(MakeUserCheckOut, [isCheckedIn, id]);
<<<<<<< HEAD
=======

      const notifications = {
        type: 'check-out',
        user_id: id,
        description: 'User Check Out',
        message: `${user.rows[0].username} has checked out`,
        created_at: formatTimestampForPostgres(new Date()),
        is_read: false,
        id: Date.now()
      }


      const projectList = JSON.parse(projects);

      if (!Array.isArray(projectList) || projectList.length === 0) {
        return res.status(400).json({ message: "Invalid projects format" });
      }

      // Get Team Leader 
      const teamLeader = await pool.query(GetTeamLeader, [projectList]);

      if (!teamLeader) {
        return res.status(404).json({ message: "Team Leader not found" });
      }

      const tl_id = teamLeader.rows[0].id;

      await notificationService.saveNotification(notifications.user_id, tl_id, notifications.type, notifications.description,
         notifications.message, notifications.created_at, notifications.is_read);

      // Emit notification to the Team Leader
      io.to(`user_${tl_id}`).emit('newNotification', notifications);

>>>>>>> 1c510ab (Sockets and Updates)
      res.status(200).json({ message: "User checked out successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
