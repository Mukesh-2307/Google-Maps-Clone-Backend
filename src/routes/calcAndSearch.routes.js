import { Router } from "express";
import { getSmallestPath } from "../controllers/computation.controller.js";
import {
  getLocSearched,
  saveLocSearched,
} from "../controllers/searchHistory.controller.js";

const router = Router();
router.route("/calculatePath").post(getSmallestPath);
router.route("/getSearchHistory").get(getLocSearched);
router.route("/saveSearchHistory").post(saveLocSearched);

export default router;
