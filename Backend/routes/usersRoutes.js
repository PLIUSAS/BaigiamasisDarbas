import express from "express";
import {
  addNewUser,
  deleteUser,
  getAllUsers,
  getUsersById,
  updateUser,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUsersById);

router.post("/users", addNewUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", updateUser);

export default router;
