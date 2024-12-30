import { pool } from "../../../config/database.js";
import { socialMediaAccounts } from "../../../config/Quries.js";

export const socialMediaAccountsCards = async (req, res) => {
  try {
    const socialAccounts = await pool.query(socialMediaAccounts);
    if (socialAccounts.rows.length > 0) {
      return res.status(200).json({ socialAccounts: socialAccounts.rows, message: "Social media fetched successfully" });
    } else {
      return res
        .status(404)
        .json({ message: "No social media accounts found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
