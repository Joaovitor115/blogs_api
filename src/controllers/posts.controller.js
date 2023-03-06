const { BlogPost } = require('../services');

const getAllPosts = async (req, res) => {
  const categories = await BlogPost.getAllPosts();
  return res.status(200).json(categories);
};

module.exports = {
  getAllPosts,
 
};