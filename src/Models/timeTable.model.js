import mongoose from "mongoose";

const timeTableSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const TimeTable = mongoose.model("TimeTable", timeTableSchema);

