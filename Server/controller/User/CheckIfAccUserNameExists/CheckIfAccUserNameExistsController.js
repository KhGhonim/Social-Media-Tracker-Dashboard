import { pool } from "../../../config/database.js";
import { CheckIfUserNameExists } from "../../../config/Quries.js";

export const checkAccUserName = async (req, res, next) => {
  const userName = req.body.username;
  if (!userName) {
    return res.status(400).json({ message: "Username is required" });
  }

  try {
    const result = await pool.query(CheckIfUserNameExists, [userName]);
    if (result.rows.length > 0) {
      return res.status(200).json({ message: "Username already exists" });
    }
    next()
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
