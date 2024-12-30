import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token = req.cookies.alphaToken;
  if (!token) {
    return res.status(401).json({
      message: "Access denied, no token provided",
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(500).json({
          message: "Invalid Token",
        });
      }

      const remainingTime = user.exp * 1000 - Date.now();
      if (remainingTime < 3600000) {
        const newToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });

        res.cookie("alphaToken", newToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
          maxAge: 24 * 60 * 60 * 1000, // 24 hours
        });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}
