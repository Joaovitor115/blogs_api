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

const getAll = () => Category.findAll({ attributes: { exclude: ['password'] } });
const getOne = (id) => Category.findOne({ attributes: { exclude: ['password'] }, where: { id } });

module.exports = {
  createCategory,
  getAll,
  getOne,
};