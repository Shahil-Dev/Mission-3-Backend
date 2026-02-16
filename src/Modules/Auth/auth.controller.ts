import { Request, Response } from "express"
import { authServices } from "./auth.serves";

const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await authServices.loginUser(req.body.email, req.body.password);
        return res.status(201).json({
            success: true,
            message: "User logged in successfully",
            data: result.rows[0]
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: error
        });
    }
}


export const authController = {
    loginUser
}