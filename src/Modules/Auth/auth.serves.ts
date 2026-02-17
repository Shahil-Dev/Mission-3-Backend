import bcrypt from "bcryptjs";
import { pool } from "../../Database/db"
import jwt from "jsonwebtoken";


// middleware 



const loginUser = async (email: string, password: string) => {
    const user = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    if (user.rows.length === 0) {
        throw new Error("User not found");
    }
    const matchPassword = await bcrypt.compare(
        password,
        user.rows[0].password
    )
    if (!matchPassword) {
        throw new Error("Invalid password");
    }
    const jwtPayload = {
        id: user.rows[0].id,
        email: user.rows[0].email,
        name: user.rows[0].name
    }
    const secretKey = "KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
    const token = jwt.sign(jwtPayload, secretKey, { expiresIn: "7d" })
    delete user.rows[0].password;
    return { user: user.rows[0], token }
}




9



export const authServices = {
    loginUser
}