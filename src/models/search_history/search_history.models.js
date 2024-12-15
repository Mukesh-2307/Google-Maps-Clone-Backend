import mongoose from "mongoose";

const searchHistorySchema = new mongoose.Schema(
  {
    start_loc: {
      type: [Number],
      required: true,
    },
    end_loc: {
      type: [Number],
      required: true,
    },
  },
  { timestamps: true }
);

export const SearchHistory = mongoose.model(
  "SearchHistory",
  searchHistorySchema
);
