import express from "express";

// Controllers
import {
	getAttendanceStatBySemester,
	getAttendanceStatBySubject,
	getAttendanceStatByTimetable,
} from "../Controllers/details.controller.js";

const detailsRouter = express.Router();

detailsRouter.get("/attendance/semester/:semester", getAttendanceStatBySemester);
detailsRouter.get("/attendance/subject/:subjectId", getAttendanceStatBySubject);
detailsRouter.get("/attendance/timetable/:timetableId", getAttendanceStatByTimetable);

export default detailsRouter;
