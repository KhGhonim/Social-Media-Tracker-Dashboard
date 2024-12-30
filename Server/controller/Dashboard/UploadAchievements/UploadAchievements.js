import { pool } from "../../../config/database.js";
import { uploadAchievments } from "../../../config/Quries.js";
import { uploadStream } from "../../../middleware/CloudineryProvider.js";

export const UploadAchievements = async (req, res) => {
  const {
    Comments,
    Shares,
    Likes,
    Date,
    contentDirection,
    accountUrl,
    accountName,
    country,
    platform,
    description,
  } = req.body;
  let Image = req.file;
  const { UserId, projects } = req.query;

  if (!UserId) {
    return res
    .status(400)
    .json({ message: "Please login again before submitting your achievement!" });
  }

  if (!projects) {
    return res.status(400).json({ message: "Project ID is required" });
  }

  if (
    !Comments ||
    !Shares ||
    !Likes ||
    !Date ||
    !contentDirection ||
    !accountUrl ||
    !accountName ||
    !country ||
    !platform ||
    !description
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const ProjectNames = JSON.parse(projects);

  if (!Array.isArray(ProjectNames) || ProjectNames.length === 0) {
    return res.status(400).json({ message: "Invalid projects format" });
  }

  if (Image && Image.buffer) {
    try {
      const uploadedImg = await uploadStream(
        Image.buffer,
        `${ProjectNames.join("-")}-Achievements`
      );
      Image = uploadedImg.secure_url;
    } catch (err) {
      console.error("Error uploading image:", err);
      return res.status(500).json({ message: "Failed to upload image" });
    }
  }

  try {
    const Achievement = await pool.query(uploadAchievments, [
      Image,
      description,
      platform,
      contentDirection,
      country,
      UserId,
      accountName,
      accountUrl,
      Date,
      Likes,
      Shares,
      Comments,
      ProjectNames
    ]);

    if (!Achievement || Achievement.rows.length === 0) {
      return res.status(500).json({ message: "Failed to upload achievement" });
    }

    return res.status(201).json({
      message: "Achievement uploaded successfully",
    });
  } catch (error) {
    console.error("Error uploading achievement:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
