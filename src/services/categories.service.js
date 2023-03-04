const { Category } = require('../models');

const createCategory = async (data) => {
  try {
    const { name } = data;
    const found = await Category.create(data);
    const user = await Category.findOne({ where: { name } });
    console.log(found, 'found');
    console.log(user.dataValues, 'USER');

    return { user: user.dataValues, type: '' };
  } catch (error) {
    return { type: error, message: '\"name\" is required' };
  }
};

const getAllCategories = () => Category.findAll();
const getOne = (id) => Category.findOne({ attributes: { exclude: ['password'] }, where: { id } });

module.exports = {
  createCategory,
  getAllCategories,
  getOne,
};