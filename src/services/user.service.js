const { createToken } = require('../auth/authorization');

const Login = async (data) => {
  const { password: _, ...userWithoutPassword } = data;
  const token = createToken(userWithoutPassword);
  return token;
};
module.exports = {
  Login,
};