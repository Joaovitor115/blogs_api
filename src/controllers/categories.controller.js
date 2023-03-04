const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  const data = req.body;
  const { user, type, message } = await CategoryService.createCategory(data);
  if (type) {
    return res.status(400).json({ message });
  }
  return res.status(201).json(user);
};
const getAll = async (req, res) => {
  const users = await CategoryService.getAll();
  return res.status(200).json(users);
};
const getOne = async (req, res) => {
  const { id } = req.params;
  const user = await CategoryService.getOne(id);
  if (!user) {
   return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};
module.exports = {
  createCategory,
  getAll,
  getOne,
};