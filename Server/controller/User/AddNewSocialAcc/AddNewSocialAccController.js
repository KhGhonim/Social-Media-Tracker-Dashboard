import { pool } from "../../../config/database.js";
import { AddNewSocialMediaAccount } from "../../../config/Quries.js";

export const AddNewSocialAccController = async (req, res) => {
  const {
    region,
    country,
    platform,
    accountName,
    accountBio,
    accountUrl,
    username,
    email,
    password,
    mobileNo,
    state,
    category,
  } = req.body;

  const { userId } = req.query;

  if (!userId) {
    return res
      .status(400)
      .json({ message: "User ID is required, please login again!" });
  }

  if (
    !region ||
    !country ||
    !platform ||
    !accountName ||
    !accountBio ||
    !accountUrl ||
    !username ||
    !email ||
    !password ||
    !mobileNo ||
    !state ||
    !category
  ) {
    return res
      .status(400)
      .json({ message: "Please enter all required fields" });
  }

  try {
    const result = await pool.query(AddNewSocialMediaAccount, [
      region,
      country,
      platform,
      accountName,
      accountBio,
      accountUrl,
      username,
      email,
      password,
      mobileNo,
      category,
      state,
      userId,
    ]);
    if (result.rowCount === 0) {
      return res.status(500).json({ message: "Faild to add account, try again with different details" });
    }

    return res.status(201).json({ message: "Account added successfully" });
  } catch (error) {
    console.error("Add data error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
