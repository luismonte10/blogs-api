const categoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryService.createCategory(name);
    
    return res.status(201).json(newCategory);
  } catch (error) {
    console.log('createCategory: ', error.message);
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.getCategories();
    
    return res.status(200).json(categories);
  } catch (error) {
    console.log('getCategories: ', error.message);
    next(error);
  }
};

module.exports = {
  createCategory,
  getCategories,
};
