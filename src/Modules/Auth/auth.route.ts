import { Router } from "express";
import { authController } from "./auth.controller";

// import { userController } from "./user.controller";

const router = Router();

router.post("/login",authController.loginUser)


export const authRouter = router;