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

// ********** my old version **********
// async function DbConnection() {
//     const DB_URL = process.env.MONGODB_URI;
//     await mongoose.connect(DB_URL)
// }
// const db = mongoose.connection;
// db.on("error",console.error.bind(console,"connection error!"));
// db.once("open", function(){
//     console.log("db connected successfully!");
// })

export default DbConnection;
