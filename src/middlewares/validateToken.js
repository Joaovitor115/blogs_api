const { verifyToken } = require('../auth/authorization');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  verifyToken(authorization);
} catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};