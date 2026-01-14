import { asyncHandler } from "../Utils/asyncHandler";
import { ApiError } from "../Utils/ApiError";
import { ApiResponse } from "../Utils/ApiResponse";

const getThreeMostAttendedSubjectStat = asyncHandler(async (req, res) => {})

const getThreeLeastAttendedSubjectStat = asyncHandler(async (req, res) => {})

const getAverageAttendence = asyncHandler(async (req, res) => {})

export {
    getThreeMostAttendedSubjectStat,
    getThreeLeastAttendedSubjectStat,
    getAverageAttendence
};