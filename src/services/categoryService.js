const { Category } = require('../database/models');

const createCategory = async (name) => {
  const categoryCreated = await Category.create({ name });

  const newCategory = {
    id: categoryCreated.id,
    name,
  };

  return newCategory;
};

const getCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};
