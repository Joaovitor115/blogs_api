const { UserService } = require('../services');

const Login = async (req, res) => {
  const data = req.body;
  const token = await UserService.Login(data);
 return res.status(200).json({ token });
};
module.exports = {
  Login,
};