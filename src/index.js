import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

import { app, server } from "./lib/socket.js"


dotenv.config();

const  PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
    connectDB();
})