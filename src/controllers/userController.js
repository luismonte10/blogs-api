const userService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const {
      displayName,
      email,
      password,
      image,
    } = req.body;

    const token = await userService.createUser(displayName, email, password, image);

    return res.status(201).json({ token });
  } catch (error) {
    console.log('user: ', error.message);
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log('getUsers: ', error.message);
    next(error);
  }
};

module.exports = {
  createUser,
  getUsers,
};
