import express from "express";
import cors from "cors";
import path from "path";
import router from "./modules/index.js";
import fileUpload from "express-fileupload";
import {Server} from "socket.io";
import http from "http"



const PORT = process.env.PORT || 5000;
const app = express();



app.use(cors());
app.use(fileUpload({
    limits: {fileSize: 50 * 1024 * 1024}
}))
app.use(express.json());
app.use(express.static((path.join(process.cwd(), "src", "uploads"))));
app.use(router);



const server = http.createServer(app);
const io = new Server(server)

  io.on("connection", (client) => {
    client.on("new post", () => {
        client.broadcast.emit("render new post");
    });

    client.on("activate post", (data) => {
        client.broadcast.emit("render post", data);
    });

  });

server.listen(PORT, () => console.log(`server running http://localhost:${PORT}`));

