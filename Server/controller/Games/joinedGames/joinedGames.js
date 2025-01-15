import { pool } from "../../../config/database.js";
import { InsertNewGameScoreQuery } from "../../../config/Quries.js";

export const joinedGames = async (req, res) => {
  const { userID, gameId, role, projects, name } = req.query;
  const { score, achievementUrl } = req.body

  if (!userID || !role || !projects) {
    return res.status(400).json({ message: "Please Log In again!" });
  }
  if (!gameId) {
    return res.status(400).json({ message: "Game ID is required" });
  }

  if (!score || !achievementUrl) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  const projectList = JSON.parse(projects);

  if (!Array.isArray(projectList) || projectList.length === 0) {
    return res.status(400).json({ message: "Invalid projects format" });
  }

  try {

    const Game = await pool.query(
      InsertNewGameScoreQuery,
      [userID, gameId, projectList, score, achievementUrl, name]
    )

    if (!Game) {
      return res.status(404).json({ message: "Score not added successfully" });
    }

    return res.status(200).json({ message: "Score added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }

}
