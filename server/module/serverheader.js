const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

let app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const server = () => {
  return(
    httpServer.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    })
  )
}


module.exports = {
  io,
  server
}