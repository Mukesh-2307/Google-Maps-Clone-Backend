import mongoose from "mongoose";

// ********** my current version **********
const DbConnection = async () => {
  try {
    const response = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`mongoDB connected on host: ${response.connection.host}`);
  } catch (error) {
    console.log("DB connection error", error);
    process.exit(1);
  }
};

export default DbConnection;
