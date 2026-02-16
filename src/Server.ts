import express, { Request, Response } from "express";
import { userRouter } from "./Modules/User/user.route";
import { initDB } from "./Database/db";

const app = express();
app.use(express.json());

initDB()




//post request
app.use("/api/v1/users", userRouter);

//1st get request
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World" });
}
)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

