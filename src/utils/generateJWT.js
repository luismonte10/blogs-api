const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, process.env.JWT_SECRET, jwtConfig);

  return token;
};

module.exports = generateJWT;