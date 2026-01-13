import express from 'express';

// Controllers
import {
  registerUser,
  login,
  logout,
  generateRefreshAndAccessToken,
  changePassword,
  deleteUser,
  updateProfile,
  getUserById,
  getAllUsers,
} from "../Controllers/user.controller.js";

const userRouter = express.Router();

// Public routes
userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/token", generateRefreshAndAccessToken);

// Protected / user management routes
userRouter.patch("/change-password", changePassword);
userRouter.patch("/:id", updateProfile);
userRouter.delete("/:id", deleteUser);
userRouter.get("/:id", getUserById);
userRouter.get("/", getAllUsers);

export default userRouter;

