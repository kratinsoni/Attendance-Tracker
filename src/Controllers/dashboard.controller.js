import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

const getThreeMostAttendedSubjectStat = asyncHandler(async (req, res) => {});

const getThreeLeastAttendedSubjectStat = asyncHandler(async (req, res) => {});

const getAverageAttendence = asyncHandler(async (req, res) => {});

export {
  getThreeMostAttendedSubjectStat,
  getThreeLeastAttendedSubjectStat,
  getAverageAttendence,
};
