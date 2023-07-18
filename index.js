import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { data } from "./data.js";

const app = express();
dotenv.config();

app.use(cors());

const PORT = process.env.PORT || 5000;


app.get("/",(req,res) => {
    res.status(200).json(data);
    res.end();
});

app.listen(PORT,() => console.log(`server is running on port 5000`));
