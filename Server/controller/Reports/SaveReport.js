import { pool } from "../../config/database.js";
import { InsertNewReportQuery } from "../../config/Quries.js";

export const SaveReport = async (req, res) => {
  const { projects, userName, userID, reportDescription, reportType, ReportURL } = req.query;

  if (!projects || !userName || !userID || !reportDescription || !reportType || !ReportURL) {
    return res.status(400).json({ message: "Please enter all required fields" });
  }

  const projectList = JSON.parse(projects);

  if (!Array.isArray(projectList) || projectList.length === 0) {
    return res.status(400).json({ message: "Invalid projects format" });
  }
  try {

    const result = await pool.query(InsertNewReportQuery, [reportDescription, reportType, userName, userID, projectList, ReportURL]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Report not saved successfully in Database" });
    }
    return res.status(200).json(result.rows);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}
