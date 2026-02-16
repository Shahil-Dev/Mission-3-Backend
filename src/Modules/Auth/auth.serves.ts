import { pool } from "../../Database/db"

const loginUser = async (email: string, password: string) => {
    const user = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
    return user
}


export const authServices = {
    loginUser
}