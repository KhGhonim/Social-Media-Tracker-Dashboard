import { pool } from "../../../config/database.js";
import { updateProfileSettings } from "../../../config/Quries.js";
import { uploadStream } from "../../../middleware/CloudineryProvider.js";
import bcrypt from "bcrypt";

export const updateSettings = async (req, res) => {
  let Image = req.file;
  const { userId, projects } = req.query;
  const {
    password,
    birthday,
    phoneNumber,
    location,
    country,
    confirmPassword,
  } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  if (!password || !birthday || !phoneNumber || !location || !country) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  if (!Image) {
    return res.status(400).json({ message: "Please upload an image" });
  }

  const ProjectNames = JSON.parse(projects);

  if (!Array.isArray(ProjectNames) || ProjectNames.length === 0) {
    return res.status(400).json({ message: "Invalid projects format" });
  }

  if (Image && Image.buffer) {
    try {
      const uploadedImg = await uploadStream(
        Image.buffer,
        `${ProjectNames.join("-")}-Profile Picture`
      );
      if (!uploadedImg || !uploadedImg.secure_url) {
        return res.status(500).json({ message: "Image upload failed" });
      }

      Image = uploadedImg.secure_url;
    } catch (err) {
      console.error("Error uploading image:", err);
      return res.status(500).json({ message: "Failed to upload image" });
    }
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await pool.query(updateProfileSettings, [
      userId,
      Image,
      hashedPassword,
      birthday,
      phoneNumber,
      location,
      country,
    ]);

    if (!user || user.rows.length === 0) {
      return res
        .status(400)
        .json({
          message: "Failed to update profile settings. Please try again.",
        });
    }

    return res.status(201).json({
      message: "Profile uploaded successfully",
    });
  } catch (error) {
    console.error("Error updating profile settings:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
