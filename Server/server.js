import express from "express";
import cluster from "cluster";
import { cpus } from "os";
import { Server } from "socket.io";
import Redis from "redis";
import cors from "cors";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import analyticsRouter from "./routes/analytics.js";
import initializeSocket from "./socket/socket.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { task } from "./controller/Automate/ResetCheckInAndOut/ResetCheckInAndOut.js";
const numCPUs = cpus().length;
dotenv.config();

if (cluster.isPrimary) {
  // Fork workers based on CPU cores
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Replace the dead worker
  });
} else {
  const app = express();

  // Middleware
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json());

  // Redis client setup
  // const redisClient = Redis.createClient({
  //   url: process.env.REDIS_URL || "redis://localhost:6379",
  // });

  // await redisClient.connect()  Redis client needs to be connected in newer versions

  // Routes
  app.get("/", async (req, res) => {
    res.send("Hello World!");
  });

  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
  app.use("/api/analytics", analyticsRouter);

  // Automatiation
  // Reset Check in and Out for Users
  task.start();


  const PORT = process.env.PORT || 5000;
  const server = app.listen(PORT, () => {
    console.log(
      `Worker ${process.pid} started on port ${PORT}, http://localhost:${PORT}`
    );
  });

  // Socket.IO setup
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  });

  app.set('io', io);
  
  initializeSocket(io);
}
