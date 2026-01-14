import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

const createAttendance = asyncHandler(async (req, res) => {});

const deleteAttendance = asyncHandler(async (req, res) => {});

const updateAttendance = asyncHandler(async (req, res) => {});

const getAllAttendance = asyncHandler(async (req, res) => {});

const getAttendanceById = asyncHandler(async (req, res) => {});

const getAttendanceBySemester = asyncHandler(async (req, res) => {});

const getAttendanceByWeek = asyncHandler(async (req, res) => {});

const getAttendanceBySubject = asyncHandler(async (req, res) => {});

const getAttendanceByMonth = asyncHandler(async (req, res) => {});

export {
  createAttendance,
  deleteAttendance,
  updateAttendance,
  getAllAttendance,
  getAttendanceById,
  getAttendanceBySemester,
  getAttendanceByWeek,
  getAttendanceBySubject,
  getAttendanceByMonth,
};
