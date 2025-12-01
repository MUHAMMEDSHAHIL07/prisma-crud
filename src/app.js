import express from "express"
import userRoute from "./routes/userRoute.js"
import productRoute from "./routes/productRoute.js"
const app = express()
app.use(express.json())
app.get("/", (req, res) => res.send("Hello World"));
app.use("/user", userRoute)
app.use("/product", productRoute)
export default app