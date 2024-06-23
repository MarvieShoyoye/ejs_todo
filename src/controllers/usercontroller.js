import successResponse from "../utility/success.js";
import errorHandler from "../utility/error.js";
import UserService from "../services/userservice.js";

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // coming form service layer aka DAL
    const userExist = await UserService.findOneUser(email);
    if (userExist) return errorHandler(409, "user already exist");

    const data = {
      name,
      email,
      password,
    };
    const newUser = await UserService.createUser(data);
    const dataInfo = {
      userId: newUser._id,
      message: "user created",
    };

    return successResponse(res, dataInfo, "user created successfully");
  } catch (error) {}
};

const findAllUsers = async (req, res) => {
  try {
    const users = await UserService.findAll();
    const dataInfo = {
      items: users,
      message: "user created",
    };
    return successResponse(res, dataInfo, "users retrieved successfully");
  } catch (error) {}
};

const findAllUsersWithView = async (req, res) => {
  try {
    const users = await UserService.findAll();
    return res.render("index", { users });
  } catch (error) {}
};

export { createUser, findAllUsers, findAllUsersWithView };

// // export default { createUser, findAllUsers, findAllUsersWithView };
