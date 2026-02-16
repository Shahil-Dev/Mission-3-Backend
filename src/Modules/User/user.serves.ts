import { pool } from "../../Database/db";

const createInToDB = async (payload: any) => {
    const body = payload;
    const result = await pool.query(
        "INSERT INTO users (name, email, password, age) VALUES ($1, $2, $3, $4) RETURNING *",
        [body.name, body.email, body.password, body.age]
    )
    return result;
}

export const userServices = {
    createInToDB
}