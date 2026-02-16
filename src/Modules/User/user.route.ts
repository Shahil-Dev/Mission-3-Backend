import { Request, Response, Router } from "express";
import { pool } from "../../Database/db";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const body = req.body;
    const result = await pool.query(
        "INSERT INTO users (name, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *",
        [body.name, body.email, body.password, body.age]
    )
    res.status(201).json(result.rows[0]);
} )


export const userRouter = router;