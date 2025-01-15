import { pool } from "../../../../config/database.js";
import {  fetchFollowingForOperationsQuery } from "../../../../config/Quries.js";

export const fetchFollowingForOperations = async (req, res) => {
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
        
        const user = await pool.query(fetchFollowingForOperationsQuery, [projectList]);
    
        if (!user) {
          return res.status(404).json({ message: "Absence users not found" });
        }
      return  res
          .status(200)
          .json({ message: "Absence users fetched successfully", accounts: user.rows });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
      }
}
