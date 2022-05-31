const userService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const {
      displayName,
      email,
      password,
      image,
    } = req.body;

    const token = await userService(displayName, email, password, image);

    console.log('teste token: ', token);

    return res.status(201).json({ token });
  } catch (error) {
    console.log('user: ', error.message);
    next(error);
  }
};

module.exports = createUser;
