import mongoose from "mongoose";

const dBConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/CHARITYDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connection successful");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

export default dBConnection;
