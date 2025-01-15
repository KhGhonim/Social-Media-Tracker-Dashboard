import { pool } from "../../../../config/database.js";
import { fetchEngagementsForOperationsQuery } from "../../../../config/Quries.js";

export const fetchEngagementsForOperations = async (req, res) => {
    const { userID, projects } = req.query;
    
      if (!userID) {
        return res.status(400).json({ message: "User ID is required" });
      }
    
      if (!projects) {
        return res.status(400).json({ message: "Project ID is required" });
      }
      try {
        const projectList = JSON.parse(projects);
    
        if (!Array.isArray(projectList) || projectList.length === 0) {
          return res.status(400).json({ message: "Invalid projects format" });
        }
    
        const posts = await pool.query(fetchEngagementsForOperationsQuery, [projectList]);
    
        if (!posts) {
          return res.status(404).json({ message: "Posts not found" });
        }
    
        return res
          .status(200)
          .json({ message: "Posts fetched successfully", data: posts.rows });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
      }
}
