const connectDB = async () => {
  try {
    const uri = "mongodb://sa:sapassword@localhost:27017/test?authSource=admin";
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export { connectDB };
