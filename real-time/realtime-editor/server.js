import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send-changes", (delta) => {
    socket.broadcast.emit("receive-changes", delta);
  });

  socket.on("user-typing", ({ username, color }) => {
    socket.broadcast.emit("show-typing", { username, color });
  });

  setTimeout(() => {
    socket.broadcast.emit("show-typing", { username: null, color: null });
  }, 1000);
});

httpServer.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
