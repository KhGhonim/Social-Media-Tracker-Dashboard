import { pool } from "../../../config/database.js";
import { updateSMAcc } from "../../../config/Quries.js";

export const updateSocialMediaAcc = async (req, res) => {
  const {
    acc_bio,
    acc_category,
    acc_email,
    acc_mobile,
    acc_name,
    acc_password_hash,
    acc_state,
    acc_username,
    country,
    platform,
    region,
  } = req.body;
  const { id, accId } = req.query;

  if (!id || !accId) {
    return res.status(400).json({ message: "User ID and Account ID is required" });
  }
  if (
    !acc_bio ||
    !acc_category ||
    !acc_email ||
    !acc_mobile ||
    !acc_name ||
    !acc_password_hash ||
    !acc_state ||
    !country ||
    !platform ||
    !region ||
    !acc_username
  ) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const result = await pool.query(updateSMAcc, [
      id,
      acc_bio,
      acc_email,
      acc_mobile,
      acc_name,
      acc_password_hash,
      acc_state,
      acc_username,
      acc_category,
      country,
      region,
      platform,
      accId
    ]);

    if (!result || result.rows.length === 0) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.status(200).json({ message: "Account updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
