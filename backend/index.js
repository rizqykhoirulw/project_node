import express from "express";
import authRoutes from "./routes/auth.js"
import addRoutes from "./routes/add.js"
import userRoutes from "./routes/users.js"
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/backend/auth", authRoutes);
app.use("/backend/add", addRoutes);
app.use("/backend/users", userRoutes);



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});


app.listen(8800, () => {
    console.log("Connected!");
})
