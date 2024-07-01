import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter} from "./src/routes/user.js";
import { scoreRouter } from "./src/routes/score.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ||8000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/result", scoreRouter);



mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => console.log("DB connected successfully"))
  .catch((error) => console.log("error in db connection", error));

  app.listen(PORT,()=>{console.log("server is live")})