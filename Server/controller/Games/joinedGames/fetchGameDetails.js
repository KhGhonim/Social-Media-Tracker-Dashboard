import { pool } from "../../../config/database.js";
import { GetGameDetails } from "../../../config/Quries.js";

export const fetchGameDetails = async (req, res) => {

  try {
    const gameDetails = await pool.query(GetGameDetails);

    if (!gameDetails) {
      return res.status(404).json({ message: "Game details not found" });
    }

    return res.status(200).json({ message: "Game details fetched successfully", data: gameDetails.rows });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
