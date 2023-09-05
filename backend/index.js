import express from "express";
import authRoutes from "./routes/auth.js"
import addRoutes from "./routes/add.js"
import userRoutes from "./routes/users.js"
import contentRoutes from "./routes/content.js"

const app = express();

app.use(express.json());
app.use("/backend/auth", authRoutes);
app.use("/backend/add", addRoutes);
app.use("/backend/users", userRoutes);
app.use("/backend/content", contentRoutes)


app.listen(8800, () => {
    console.log("Connected!");
})