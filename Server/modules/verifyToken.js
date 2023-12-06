const jwt = require('jsonwebtoken');

// Middleware function for verifying JWT tokens
const verifyToken = (req, res, next) => {
  // Extract the token from the Authorization header in the request
  const token = req.headers.authorization;

  if (!token) {
    // If no token is found, respond with a 401 Unauthorized error
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Verify the JWT token using the provided secret key
  jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET, (err, decoded) => {
    // Check for errors during token verification
    if (err) {
      // If the token is invalid or has expired, respond with a 401 Unauthorized error
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.userId = decoded.userId;

    next();
  });
};

module.exports = verifyToken;
