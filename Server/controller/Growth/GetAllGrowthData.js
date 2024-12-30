import { pool } from "../../config/database.js";

export const fetchAllGrowthData = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM growth_users");
    return res
      .status(200)
      .json({
        message: "Growth data fetched successfully",
        data: results.rows,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
