import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// providing access to all origins
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    // origin: "*",
    Credentials: true,
  })
);

// predefined middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//  Routes imports
import calcAndSearchRouter from "./src/routes/calcAndSearch.routes.js";

// Routes declaration
app.use("/api/v1/calcAndSearch", calcAndSearchRouter);

// demo routes
// app.get("/hero", (req, res) => {
//   res.send("hello hero!");
// });

// app.get("/", (req, res) => {
//   res.send("hello home!");
// });

export { app };
