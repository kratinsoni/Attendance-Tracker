
import express from "express";

import { verifyJWT } from "../Middlewares/auth.middleware.js";
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

subjetRouter.use(verifyJWT);

subjetRouter.post("/", createSubject);
subjetRouter.delete("/:id", deleteSubject);
subjetRouter.patch("/:id", updateSubject);
subjetRouter.get("/semester/:semester", getAllSubjectsOfSemester);
subjetRouter.get("/:id", getSubjectById);
subjetRouter.get("/", getAllSubjects);

export default subjetRouter;
