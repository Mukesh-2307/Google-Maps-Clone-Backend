import dotenv from "dotenv";
import DbConnection from "./src/db/dbconnect.js";
import { app } from "./app.js";
dotenv.config();

// retriving port id from .env file
const port = process.env.PORT;

// MONGOdb connection
DbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongoDB connection failed.", err);
  });
