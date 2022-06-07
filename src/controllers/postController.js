const postService = require('../services/postService');

// const createPost = async (req, res, next) => {
//   try {
//     const { title, content, categoryIds } = req.body;

//     const newPost = await postService.createPost(title, content, categoryIds);

//     return res.status(201).json(newPost);
//   } catch (error) {
//     console.log('createPost: ', error.message);
//     next(error);
//   }
// };

const getBlogPost = async (req, res, next) => {
  try {
    const BlogPost = await postService.getBlogPost();

    return res.status(200).json(BlogPost);
  } catch (error) {
    console.log('getBlogPost: ', error.message);
    next(error);
  }
};

module.exports = {
  // createPost,
  getBlogPost,
};