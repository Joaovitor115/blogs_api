const { createToken } = require('../auth/authorization');
const { User } = require('../models');

const Login = async (data) => {
  const { password: _, ...userWithoutPassword } = data;
  const token = createToken(userWithoutPassword);
  return token;
};

const createUser = async (data) => {
  const { email } = data;
  const user = await User.findOne({ where: { email } });
  if (user) return { type: 'user already exists', message: 'User already registered' };
  console.log(user, 'SDGDFHDFHDFHDFHDFHDFHDFHr');
  await User.create(data);
  const { password: _, ...userWithoutPassword } = data;
  const token = createToken(userWithoutPassword);
  return { token, type: '' };
};
module.exports = {
  Login,
  createUser,
};