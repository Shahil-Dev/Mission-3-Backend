import { Request, Response } from "express"
import { authServices } from "./auth.serves";

const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await authServices.loginUser(req.body.email, req.body.password);
        return res.status(201).json({
            success: true,
            message: "User logged in successfully",
            data: result
        });
    }
    catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

}


export const authController = {
    loginUser
}