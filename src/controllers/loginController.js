const loginService = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const token = await loginService(email, password);

    return res.status(200).json({ token });
  } catch (error) {
    console.log('login: ', error.message);
    next(error);
  }
};

module.exports = login;