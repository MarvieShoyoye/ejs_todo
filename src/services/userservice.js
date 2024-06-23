import UserModel from "../model/usermodel.js";

// DAL ----> Data Access Layer
const UserService = {
  createUser: async (data) => {
    const user = await UserModel.create(data);
    return user;
  },

  findOneUser: async (email) => {
    const user = await UserModel.findOne({ email: email });
    return user;
  },

  findAll: async () => {
    const users = await UserModel.find();
    return users;
  },
};

export default UserService;
