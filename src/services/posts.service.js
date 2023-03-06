const { BlogPost, Category, User } = require('../models');

const getAllPosts = async () => {
  try {
    const post = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    console.log(post, 'POST');
    return post;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllPosts,

};