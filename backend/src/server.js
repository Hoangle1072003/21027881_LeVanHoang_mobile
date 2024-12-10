import express from "express";
import cors from "cors";
import initWebRoutes from "./routes/web";
import { connectDB } from "./config/connectDB";
const path = require("path");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: process.env.URL_REACTNATIVE || "http://localhost:8081",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
initWebRoutes(app);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
