const errorMiddlewares = (err, req, res, _next) => {
  if (err.status && err.message) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddlewares;
