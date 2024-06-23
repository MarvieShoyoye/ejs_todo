import PostModel from "../model/postmodel.js";

// DAL ----> Data Access Layer
const PostService = {
  createPost: async (data) => {
    const post = await PostModel.create(data);
    return post;
  },

  findOnePost: async (email) => {
    const post = await PostModel.findOne({ email: email });
    return post;
  },
};

export default PostService;
