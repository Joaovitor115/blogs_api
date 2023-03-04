

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  },
    {
      timestamps: false,
      tableName: 'posts',
      underscored: true
    });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory
    })
    models.Category.belongsToMany(models.BlogPost, {
       through: PostCategory,
       as: 'blog_posts',
       foreignKey: 'categoryId',
       otherKey: 'postId',
       through: PostCategory
      })
  };


  return PostCategory;
};