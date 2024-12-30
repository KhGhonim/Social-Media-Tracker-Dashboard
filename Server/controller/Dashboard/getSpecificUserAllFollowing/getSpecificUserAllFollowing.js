import { pool } from "../../../config/database.js";
import { getSpecificUserAllFollowingQuery } from "../../../config/Quries.js";

export const getSpecificUserAllFollowing = async (req, res) => {
  const { userID } = req.query;

  if (!userID) {
    return res.status(400).json({ message: "Please Log In again!" });
  }

  try {
    const user = await pool.query(getSpecificUserAllFollowingQuery, [userID]);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "All Followers of Acc stats fetched successfully",
      data: user.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};