const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
  try {
      const token = req.headers.authorization;
    
      if (!token) return res.status(401).json({ message: 'Token not found' });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(decoded);
  
      // if (!decoded.data) {
      //   console.log('Entrou aqui?');
      //   return res.status(401).json({ message: 'Expired or invalid token' });
      // }
  
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = authToken;