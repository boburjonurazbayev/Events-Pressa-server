import { Server } from "socket.io";
import {fetchAll} from "../../lib/postgres.js"

export default function (server) {
    const io = new Server(server, {
        cors: {
            methods: ['GET', 'POST']
        }
    })

    io.on('connnection', (socket) => {
        socket.on("post", async () => {
            
        })
    })
}