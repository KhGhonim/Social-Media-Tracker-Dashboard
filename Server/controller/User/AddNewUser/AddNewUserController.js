import { pool } from "../../../config/database.js";
import { InsertNewUser } from "../../../config/Quries.js";
import bcrypt from "bcrypt";

export const AddNewUser = async (req, res) => {
  const {
    username,
    location,
    phone_number,
    email,
    password,
    role,
    birthday,
    country,
    projects,
  } = req.body;

  if (!username || !email || !password || !role || !projects) {
    return res
      .status(400)
      .json({ message: "Please enter all required fields" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const projectsArray = Array.isArray(projects) ? projects : [];

    const result = await pool.query(InsertNewUser, [
      username,
      location,
      phone_number,
      email,
      hashedPassword,
      role,
      birthday,
      country,
      projectsArray,
    ]);
    if (result.rowCount === 0) {
      return res.status(400).json({ message: "Failed to create user" });
    }

    res.status(201).json({
      message: "User added successfully",
    });
  } catch (error) {
    console.error("Add data error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
