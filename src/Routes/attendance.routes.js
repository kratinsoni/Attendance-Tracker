import express from "express";

// Controllers
import {
	createAttendance,
	updateAttendance,
	deleteAttendance,
	getAllAttendance,
	getAttendanceById,
	getAttendanceBySemester,
	getAttendanceByWeek,
	getAttendanceBySubject,
	getAttendanceByMonth,
} from "../Controllers/attendance.controller.js";

const attendanceRouter = express.Router();

attendanceRouter.post("/", createAttendance);
attendanceRouter.patch("/:id", updateAttendance);
attendanceRouter.delete("/:id", deleteAttendance);
attendanceRouter.get("/:id", getAttendanceById);
attendanceRouter.get("/", getAllAttendance);
attendanceRouter.get("/semester/:semester", getAttendanceBySemester);
attendanceRouter.get("/week/:week", getAttendanceByWeek);
attendanceRouter.get("/subject/:subjectId", getAttendanceBySubject);
attendanceRouter.get("/month/:month", getAttendanceByMonth);

export default attendanceRouter;
