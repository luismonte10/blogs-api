const { BlogPost, User, Category } = require('../database/models');

// const createPost = async (title, content, categoryIds) => {
  
// };

const getBlogPost = () => {
  const blogPosts = BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return blogPosts;
};

module.exports = {
  // createPost,
  getBlogPost,
};