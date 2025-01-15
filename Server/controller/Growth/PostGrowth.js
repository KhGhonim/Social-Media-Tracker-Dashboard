import { pool } from "../../config/database.js";
import {
  CheckIfAccountExists,
  GetTeamLeader,
  GetUserInfo,
  PostGrowthPerPersonBalatarin,
  PostGrowthPerPersonBlogSky,
  PostGrowthPerPersonblogspot,
  PostGrowthPerPersonFB,
  PostGrowthPerPersonIG,
  PostGrowthPerPersonKizlarsoruyor,
  PostGrowthPerPersonlinkedin,
  PostGrowthPerPersonokru,
  PostGrowthPerPersonpinterest,
  PostGrowthPerPersonRD,
  PostGrowthPerPersonTelegram,
  PostGrowthPerPersonTHDS,
  PostGrowthPerPersonTK,
  PostGrowthPerPersontumblr,
  PostGrowthPerPersonturkkitap,
  PostGrowthPerPersonTW,
  PostGrowthPerPersonVirasty,
  PostGrowthPerPersonvk,
  PostGrowthPerPersonYT,
} from "../../config/Quries.js";
import { formatTimestampForPostgres } from "../../middleware/formatTimestampForPostgres.js";
import { platformMetrics } from "../../middleware/Platforms.js";
import { notificationService } from "../Notifications/SaveNotification.js";

export const PostGrowth = async (req, res) => {
  const { stats, platform, id, } = req.body;
  const { projects, userID, role } = req.query;
  const io = req.app.get('io');

  const accountCheck = await pool.query(CheckIfAccountExists, [id, platform]);

  if (accountCheck.rows.length === 0) {
    return res.status(404).json({
      message: "Social media account not found for this user and platform",
    });
  }

  const platformQueries = {
    twitter: PostGrowthPerPersonTW,
    instagram: PostGrowthPerPersonIG,
    facebook: PostGrowthPerPersonFB,
    reddit: PostGrowthPerPersonRD,
    tiktok: PostGrowthPerPersonTK,
    youtube: PostGrowthPerPersonYT,
    threads: PostGrowthPerPersonTHDS,
    tumblr: PostGrowthPerPersontumblr,
    pinterest: PostGrowthPerPersonpinterest,
    linkedin: PostGrowthPerPersonlinkedin,
    telegram: PostGrowthPerPersonTelegram,
    vk: PostGrowthPerPersonvk,
    okru: PostGrowthPerPersonokru,
    turkkitap: PostGrowthPerPersonturkkitap,
    blogspot: PostGrowthPerPersonblogspot,
    kizlarsoruyor: PostGrowthPerPersonKizlarsoruyor,
    balatarin: PostGrowthPerPersonBalatarin,
    virasty: PostGrowthPerPersonVirasty,
    blogsky: PostGrowthPerPersonBlogSky,
  };

  const query = platformQueries[platform];

  if (!query) {
    return res.status(400).json({ message: "Unsupported platform" });
  }

  const requiredMetrics = platformMetrics[platform] || [];

  const values = requiredMetrics
    .map((metric) => stats[metric])
    .concat(id, platform);


  try {
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({
          message: `Growth for ${platform} not added, try again later!`,
        });
    }

    // Get User Info
    const userInfo = await pool.query(GetUserInfo, [userID]);

    if (!userInfo) {
      return res.status(404).json({ message: "User not found" });
    }


    const notifications = {
      type: 'growth',
      user_id: id,
      description: 'User Growth',
      message: `${userInfo.rows[0].username} has added growth for ${platform}`,
      created_at: formatTimestampForPostgres(new Date()),
      is_read: false,
      id: Date.now()
    }

    const projectList = JSON.parse(projects);

    if (!Array.isArray(projectList) || projectList.length === 0) {
      return res.status(400).json({ message: "Invalid projects format" });
    }

    // Get Team Leader 
    const teamLeader = await pool.query(GetTeamLeader, [projectList]);


    if (!teamLeader) {
      return res.status(404).json({ message: "Team Leader not found" });
    }

    const tl_id = teamLeader.rows[0].id;

    // Save notification
    await notificationService.saveNotification(userID, tl_id, notifications.type, notifications.description,
      notifications.message, notifications.created_at, notifications.is_read, role);


    const roomName = `user_${tl_id}`;
    io.in(roomName).fetchSockets().then((sockets) => {
      if (sockets.length > 0) {
        io.to(roomName).emit("newNotification", notifications);
        console.log(`Notification emitted to ${roomName}`);
      } else {
        console.log(`No connected sockets in room ${roomName}`);
      }
    });

    res.status(200).json({
      message: "Excellent Job! Growth saved successfully",
    });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
