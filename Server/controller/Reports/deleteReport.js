import { pool } from "../../config/database.js";
import { DeleteReport } from "../../config/Quries.js";

export const deleteReport = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: "Report ID is required" });
  }

  try {
    const result = await pool.query(DeleteReport, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Report not found" });
    }

    return res.status(200).json({ message: "Report deleted successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }

}
