import { Request, Response } from "express";
import { userServices } from "./user.serves";

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.createInToDB(req.body);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
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

export const userController = {
    createUser
}