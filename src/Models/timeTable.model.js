import mongoose from "mongoose";

const timeTableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      Trim: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  
      required: true,
    },
    subjects: [ 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],
    semesterType: {
      type: String,
      enum: ["AUTUMN", "SPRING"],
      required: true,
    },
  },
  { timestamps: true }
);

export const TimeTable = mongoose.model("TimeTable", timeTableSchema);

