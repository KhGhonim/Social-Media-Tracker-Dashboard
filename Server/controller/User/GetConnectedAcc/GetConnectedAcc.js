import { pool } from "../../../config/database.js";
import { GetAccountsPerUser } from "../../../config/Quries.js";

export const GetConnectedAcc = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  try {
    const user = await pool.query(GetAccountsPerUser, [userId]);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ message: "Connected accounts fetched successfully", data: user.rows });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal Server Error" });
  }
};
 