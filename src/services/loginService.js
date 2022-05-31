const { User } = require('../database/models');
const errorHandler = require('../utils/errorHandler');
const generateJWT = require('../utils/generateJWT');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) throw errorHandler(400, 'Invalid fields');

  delete user.dataValues.password;

  const token = generateJWT(user);

  return token;
};

module.exports = login;
