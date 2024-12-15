import { asyncHandler } from "../utils/asyncHandler.js";
import { apiErrorHandler } from "../utils/apiErrorHandler.js";

// import the osmnx util
import { calcPath } from "../utils/osmnx.js";

const getSmallestPath = asyncHandler(async (req, res) => {
  // res.json({user: "geek"})

  const { start_loc, end_loc } = req.body;
  // console.log(data.start_loc, data.end_loc);

  // empty field checking
  if (!start_loc || !end_loc) {
    throw new apiErrorHandler(400, "both fields are required!");
  }

  try {
    const shortestRoute = await calcPath(start_loc, end_loc); //compute the osmnx util here
    return res
      .status(200)
      .json(200, { shortestRoute }, "py script execution successfull");
  } catch (error) {
    console.log(error);
    throw new apiErrorHandler(500, "py script execution unsuccessfull");
  }
});

export { getSmallestPath };
