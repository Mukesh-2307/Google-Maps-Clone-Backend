import dotenv from "dotenv";
import DbConnection from "./db/dbconnect.js";
import { app } from "./app.js";
dotenv.config();

// retriving port id from .env file
const port = process.env.PORT;

// MONGOdb connection
DbConnection()
  .then(() => {
    app.use("/", (req, res) => {
      res.send("server is running");
    });
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongoDB connection failed.", err);
  });
