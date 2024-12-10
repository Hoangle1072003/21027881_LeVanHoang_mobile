import User from "../model/User";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      errCode: 0,
      message: "OK",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export default {
  getAllUsers,
};
