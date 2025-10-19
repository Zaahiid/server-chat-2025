import express from "express";
import { connectDB } from "./lib/db";



const app = express();

app.listen(3000, () => {
    console.log(`Server is runnig on port 3000`);
    connectDB();
})