import successResponse from "../utility/success.js";
import errorHandler from "../utility/error.js";
import PostService from"../services/postservice.js";

export const createPost = async (req, res) => {
  const {title, content, password } = req.body;
  try {
   
    const postExist = await PostService.findOnePost(email);
    if (postExist) return errorHandler(404, "post not found");

    const data = {
      title,
      content,
      password,
    };
    const newPost = await PostService.createPost(data);
    const dataInfo = {
      postId: newPost._id,
      message: "post created",
    };

  
    return successResponse(res, dataInfo, "post created successfully");
  } catch (error) {}
};

export default createPost;
