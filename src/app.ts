import express, { Request, Response } from "express";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.use("/user", userRoute);
app.use("/product", productRoute);

export default app;