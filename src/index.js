import dotenv from "dotenv";
import DbConnection from "./db/dbconnect.js";
import { app } from "./app.js";
dotenv.config();

const port = process.env.PORT;

DbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongoDB connection failed.", err);
  });
