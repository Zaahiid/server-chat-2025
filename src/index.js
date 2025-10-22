import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js"
import messagesRoutes from "./routes/message.route.js"
import { app, server } from "./lib/socket.js"


dotenv.config();

const  PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes)

server.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
    connectDB();
})