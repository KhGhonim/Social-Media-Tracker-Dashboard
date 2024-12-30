import { pool } from "../../../config/database.js";
import { GetCheckInOrOutForProfileAPI } from "../../../config/Quries.js";

export const GetCheckInOrOutForProfile = async (req, res) => {
  const { userId } = req.query;

  
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  try {
    const user = await pool.query(
      GetCheckInOrOutForProfileAPI,
      [userId]
    )

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ message: "Check-in or check-out fetched successfully", data: user.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
