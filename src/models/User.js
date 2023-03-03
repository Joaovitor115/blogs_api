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
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      image: DataTypes.STRING,
      displayName: DataTypes.STRING
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true
    },
  );

  return User;
};