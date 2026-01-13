import { asyncHandler } from "../Utils/asyncHandler";
import { ApiError } from "../Utils/ApiError";
import { ApiResponse } from "../Utils/ApiResponse";

const creatAttendance = asyncHandler(async (req, res) => {})

const deleteAttendance = asyncHandler(async (req, res) => {})

const updateAttendance = asyncHandler(async (req, res) => {})

const getAllAttendance = asyncHandler(async (req, res) => {})

const getAttendanceById = asyncHandler(async (req, res) => {})

const getAttendanceBySemester = asyncHandler(async (req, res) => {})

const getAttendanceByWeek = asyncHandler(async (req, res) => {})

const getAttendanceBySubject = asyncHandler(async (req, res) => {})

const getAttendanceByMonth = asyncHandler(async (req, res) => {})

export {
    creatAttendance,
    deleteAttendance,
    updateAttendance,
    getAllAttendance,
    getAttendanceById,
    getAttendanceBySemester,
    getAttendanceByWeek,
    getAttendanceBySubject,
    getAttendanceByMonth
}