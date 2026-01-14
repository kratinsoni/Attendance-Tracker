import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

const createTimetable = asyncHandler(async (req, res) => {});

const deleteTimetable = asyncHandler(async (req, res) => {});

const updateTimetable = asyncHandler(async (req, res) => {});

const addSubjectToTimetable = asyncHandler(async (req, res) => {});

const removeSubjectFromTimetable = asyncHandler(async (req, res) => {});

const getAllTimetables = asyncHandler(async (req, res) => {});

const getTimetableById = asyncHandler(async (req, res) => {});

const getTimetableStatByWeek = asyncHandler(async (req, res) => {});

export {
  createTimetable,
  deleteTimetable,
  updateTimetable,
  addSubjectToTimetable,
  removeSubjectFromTimetable,
  getAllTimetables,
  getTimetableById,
  getTimetableStatByWeek,
};
