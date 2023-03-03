const { User } = require('../models');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
if (!email || !password) {
  return res.status(400).json({
    message: 'Some required fields are missing',
  });
}
const user = await User.findOne({ where: { password, email } });
console.log(user, 'user middleware');
  if (!user) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }
next();
};