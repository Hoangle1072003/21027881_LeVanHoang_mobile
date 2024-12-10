import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sapassword",
  database: "test1",
  port: 3307,
});

const connectDB = async () => {
  try {
    await pool.getConnection();
    console.log("Connect to database successfully!");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

export { connectDB, pool };
