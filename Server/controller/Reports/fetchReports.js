import { pool } from "../../config/database.js";
import { GetAllReports } from "../../config/Quries.js";

export const fetchReports = async (req, res) => {

  try {
    const result = await pool.query(GetAllReports);
    return res.status(200).json(result.rows);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }

}
