import { Request, Response, Router } from "express";
import { pool } from "../../Database/db";
import { userController } from "./user.controller";

const router = Router();

router.post("/", userController.createUser)


export const userRouter = router;