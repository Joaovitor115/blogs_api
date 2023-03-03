/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      image: DataTypes.STRING,
      display_name: DataTypes.STRING
    },
    {
      timestamps: false,
      tableName: 'users',
    },
  );

  return User;
};