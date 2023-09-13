import { config } from "dotenv";
config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./src/routes/index.js";

const { PORT } = process.env;
if (PORT == "") {
  PORT = 8080;
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));
app.use(router);

app.use((req, res) => {
  return res.status(404).json({
    status: 404,
    error: "page not found",
    message: "input the right endpoint",
  });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
