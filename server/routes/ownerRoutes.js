import express from "express";
import { protect } from "../middlewave/auth.js";
import { changeRoleToOwner } from "../controllers/ownerController.js";

const ownerRouter =express.Router();

ownerRouter.post("/change-role", protect)

ownerRouter.post("/change-role", protect ,changeRoleToOwner)

export default ownerRouter;
