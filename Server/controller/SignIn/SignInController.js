import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { pool } from "../../config/database.js";
import { CheckIfUserExists } from "../../config/Quries.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const result = await pool.query(CheckIfUserExists, [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: "No user found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user && isValidPassword) {
      // Generate token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.cookie("alphaToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
        maxAge:  24 * 60 * 60 * 1000, // 24 hours
      });



      res.json({
        user: {
          email: user.email,
          name: user.username,
          role: user.role,
          id: user.id,
          projects: user.projects,
        },
        message: "Login successful",
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
