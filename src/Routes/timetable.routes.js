import express from "express";

// Controllers
import {
	createTimetable,
	deleteTimetable,
	updateTimetable,
	addSubjectToTimetable,
	removeSubjectFromTimetable,
	getAllTimetables,
	getTimetableById,
	getTimetableStatByWeek,
} from "../Controllers/timetable.controller.js";

const timetableRouter = express.Router();

timetableRouter.post("/", createTimetable);
timetableRouter.delete("/:id", deleteTimetable);
timetableRouter.patch("/:id", updateTimetable);
timetableRouter.post("/:id/subjects", addSubjectToTimetable);
timetableRouter.delete("/:id/subjects/:subjectId", removeSubjectFromTimetable);
timetableRouter.get("/:id", getTimetableById);
timetableRouter.get("/", getAllTimetables);
timetableRouter.get("/stats/week/:week", getTimetableStatByWeek);

export default timetableRouter;
