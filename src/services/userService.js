const { User } = require('../database/models');
const errorHandler = require('../utils/errorHandler');
const generateJWT = require('../utils/generateJWT');

const createUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });

  if (user) throw errorHandler(409, 'User already registered');

  const userCreated = await User.create({ displayName, email, password, image });

  const newUser = {
    id: userCreated.id,
    displayName,
    email,
    image,
  };

  const token = generateJWT(newUser);

  return token;
};

module.exports = createUser;
