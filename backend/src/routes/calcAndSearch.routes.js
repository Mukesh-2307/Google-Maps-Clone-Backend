import express,{ Router } from "express";
import { getSmallestPath } from "../controllers/computation.controller.js";
import {
  getLocSearched,
  saveLocSearched,
  deleteLocSearched
} from "../controllers/searchHistory.controller.js";

const app = express()

app.get("/",(req,res)=>{
  res.send("hello from vercel.");
})

const router = Router();
// routes
router.route("/calculatePath").post(getSmallestPath);
router.route("/getSearchHistory").get(getLocSearched);
router.route("/saveSearchHistory").post(saveLocSearched);
router.route("/deleteSearchHistory").delete(deleteLocSearched);

export default router;
