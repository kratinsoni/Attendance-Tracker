
import express from "express";

// Controllers
import {
	createSubject,
	deleteSubject,
	updateSubject,
	getAllSubjects,
	getSubjectById,
	getAllSubjectsOfSemester,
} from "../Controllers/subject.controller.js";

const subjetRouter = express.Router();

// Create a subject
subjetRouter.post("/", createSubject);

// Delete a subject by id
subjetRouter.delete("/:id", deleteSubject);

// Update a subject by id
subjetRouter.patch("/:id", updateSubject);

// Get all subjects for a semester
subjetRouter.get("/semester/:semester", getAllSubjectsOfSemester);

// Get single subject by id
subjetRouter.get("/:id", getSubjectById);

// Get all subjects
subjetRouter.get("/", getAllSubjects);

export default subjetRouter;
