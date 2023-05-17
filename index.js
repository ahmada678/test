import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(cors());

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("play", () => {
    console.log("play");
    socket.broadcast.emit("backward");
  });
    socket.on("pl", () => {
      console.log("play1");
      socket.broadcast.emit("back");
    });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5050, () =>
  console.log("server is running http://localhost:5050")
);
