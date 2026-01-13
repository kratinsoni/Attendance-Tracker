import { asyncHandler } from "../Utils/asyncHandler";
import { ApiError } from "../Utils/ApiError";
import { ApiResponse } from "../Utils/ApiResponse";

const getAttendanceStatBySemester = asyncHandler(async (req, res) => {})

const getAttendanceStatBySubject= asyncHandler(async (req, res) => {})

const getAttendanceStatByTimetable= asyncHandler(async (req, res) => {})

export {
    getAttendanceStatBySemester,
    getAttendanceStatBySubject,
    getAttendanceStatByTimetable
}