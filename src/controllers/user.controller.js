const { UserService } = require('../services');

const Login = async (req, res) => {
  const data = req.body;
  const token = await UserService.Login(data);
  return res.status(200).json({ token });
};
const createUser = async (req, res) => {
  const data = req.body;
  const { token, type, message } = await UserService.createUser(data);
  if (type || message) {
    return res.status(409).json({ message });
  }
  return res.status(201).json({ token });
};
const getAll = async (req, res) => {
  const users = await UserService.getAll();
  return res.status(200).json(users);
};
module.exports = {
  Login,
  createUser,
  getAll,
};