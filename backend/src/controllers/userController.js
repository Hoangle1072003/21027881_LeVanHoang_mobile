import { pool } from "../config/connectDB";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = path.basename(file.originalname, ext);
    cb(null, `${filename}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage: storage });

const getAllUsers = async (req, res) => {
  try {
    const [users] = await pool.query("SELECT * FROM users");
    res.status(200).json({
      errCode: 0,
      message: "OKs",
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
