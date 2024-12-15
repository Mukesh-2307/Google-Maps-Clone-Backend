import { SearchHistory } from "../models/search_history/search_history.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiErrorHandler } from "../utils/apiErrorHandler.js";
import { apiResponseHandler } from "../utils/apiResponseHandler.js";

const saveLocSearched = asyncHandler(async (req, res) => {
  try {
    const { start_loc, end_loc } = req.body;
    if (!start_loc || !end_loc) {
      throw new apiErrorHandler(400, "all fields are required");
    }

    const savedLoc = await SearchHistory.create({start_loc, end_loc});
    if (!savedLoc){
        throw new apiErrorHandler(500, "internal server error")
    }
    return res.status(201).json(
        new apiResponseHandler(200,savedLoc,"location saved successfully")
    )
  } catch (error) {
    throw new apiErrorHandler(400,error.message || "failed to save searched location")
  }
});

const getLocSearched = asyncHandler(async (req, res) => {
  try {
    const getLoc = await SearchHistory.find().sort({ createdAt: -1 });
    return res.status(200).json(
        new apiResponseHandler(200,getLoc,"retrived saved locations successfully")
    )
  } catch (error) {
    throw new apiErrorHandler(500, "failed to get saved location");
  }
});

export { saveLocSearched, getLocSearched };
