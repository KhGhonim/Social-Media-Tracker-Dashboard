export const logout = async (req, res) => {
  try {
    // Clear the HTTP-only cookie
    res.clearCookie("alphaToken");

    // If you're using Redis for token blacklisting
    // const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
    // if (token) {
    //     // Add token to blacklist in Redis with expiration
    //     await redisClient.setEx(
    //         `blacklist_${token}`,
    //         24 * 60 * 60, // 24 hours
    //         'true'
    //     );
    // }

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};