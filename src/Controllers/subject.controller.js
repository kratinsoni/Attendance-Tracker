import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

const createSubject = asyncHandler(async (req, res) => {});

const deleteSubject = asyncHandler(async (req, res) => {});

const updateSubject = asyncHandler(async (req, res) => {});

const getAllSubjects = asyncHandler(async (req, res) => {});

const getSubjectById = asyncHandler(async (req, res) => {});

const getAllSubjectsOfSemester = asyncHandler(async (req, res) => {});

export {
  createSubject,
  deleteSubject,
  updateSubject,
  getAllSubjects,
  getSubjectById,
  getAllSubjectsOfSemester,
};
