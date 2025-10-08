import express from "express";
import { getUserData, loginUser, registerUser } from "../controllers/userController.js";
import {protect} from ".. middleware/auth.js"


userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/data", protect, (req, res) => {
  res.json({
    success: true,
    message: "Authorized access!",
    user: req.user,
  });
});


export default userRouter;
