import { Pool } from "pg"

export const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_UnrLK2gyWM5E@ep-delicate-pine-a8enjysw-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
})

export  const initDB = async () => {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    age INT ,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
    `)
    console.log("database connected")
}

// initDB();