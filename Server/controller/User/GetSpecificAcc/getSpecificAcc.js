import { pool } from "../../../config/database.js";
import { FindOneAccForUser } from "../../../config/Quries.js";

export const getSpecificAcc = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      message: "User ID is required, please check if the acc already added!",
    });
  }
  try {
    const user = await pool.query(FindOneAccForUser, [id]);

    if (!user) {
      return res.status(404).json({ error: "Account not found" });
    }

    res
      .status(200)
      .json({ message: "Account found successfully", user: user.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
