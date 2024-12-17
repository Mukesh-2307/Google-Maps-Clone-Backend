import { Router } from "express";
import { getSmallestPath } from "../controllers/computation.controller.js";
import {
  getLocSearched,
  saveLocSearched,
  deleteLocSearched
} from "../controllers/searchHistory.controller.js";

const router = Router();
// routes
router.route("/calculatePath").post(getSmallestPath);
router.route("/getSearchHistory").get(getLocSearched);
router.route("/saveSearchHistory").post(saveLocSearched);
router.route("/deleteSearchHistory").delete(deleteLocSearched);

export default router;
