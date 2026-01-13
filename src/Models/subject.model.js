import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ["THEORY", "LAB"],
      required: true,
    },
    labLength: {
      type: Number,
      default: 0,
    },
    professor: {
      type: String,
      required: true,
      trim: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    totalClasses: {
      type: Number,
      default: 0,
    },
    classesAttended: {
      type: Number,
      default: 0,
    },
    slots: [
      {
        type: String,
        required: true,
      },
    ],
    Grading :{
        type: String,
        enum: ["ABSOLUTE","RELATIVE"],
        required: true,
    },
    
  },
  { timestamps: true }
);

export const Subject = mongoose.model("Subject", subjectSchema);