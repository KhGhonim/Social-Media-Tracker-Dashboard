import { pool } from "../../../config/database.js";
import { EngagementOverviewTE } from "../../../config/Quries.js";

export const EngagementOverviewTEChart = async (req, res) => {
  const { userID, projects } = req.query;

  if (!userID) {
    return res.status(400).json({ message: "User ID is required" });
  }

  if (!projects) {
    return res.status(400).json({ message: "Project ID is required" });
  }
  try {
    const projectList = JSON.parse(projects);

    if (!Array.isArray(projectList) || projectList.length === 0) {
      return res.status(400).json({ message: "Invalid projects format" });
    }

    const user = await pool.query(EngagementOverviewTE, [projectList]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "Engagement accounts not found" });
    }

    res.status(200).json({
      message: "Engagement fetched successfully",
      data: user.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
