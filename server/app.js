const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { conn } = require('./module/dbConn')

let app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

// io.on('connection', (Socket) => { //Staff account creation
//   Socket.on('staff account', (data) => {
//     const userData = `INSERT INTO staff(name, role, password) VALUES (?, ?, ?)`
//     conn.query(userData, [data.name, data.role, data.password], (error, res) => {
//       if (error) return console.log(error)

//       // Log user In if signup is successful
//       const user = `SELECT * FROM staff WHERE 1`
//       conn.query(user, [firstname, regNumber], (err, result) => {
//         if (err) return Socket.emit('staff account', {error:'Something went wrong'})
//         if (result.length < 1) {
//           Socket.emit('staff account', {error: 'User not found'})
//         }else{
//           Socket.emit('staff account', result)
//         }
//       })
//       // Socket.emit('staff account', )
//     })
//   })
// })


io.on("connection", (Socket) => { //Student account creation
  Socket.on('create account', data => { 
    const { regNumber, firstname, lastname, department } = data
    const user = `INSERT INTO users (reg_no, firstname, lastname, department) VALUES (?, ?, ?, ?)`
    conn.query(user, [regNumber, firstname, lastname, department], (error, response) => {
      if (error) return Socket.emit('create account', {error: 'Something went wrong'})
      // Log user In if signup is successful
      const user = `SELECT * FROM users WHERE firstname=? AND reg_no=?`
      conn.query(user, [firstname, regNumber], (err, result) => {
        if (err) return Socket.emit('create account', {error:'Something went wrong'})
        if (result.length < 1) {
          Socket.emit('create account', {error: 'User not found'})
        }else{
          Socket.emit('create account', result)
        }
      })
    })
  })
})


io.on("connection", (Socket) => { //User Login
  Socket.on('login', (data) => { 
    const { firstname, regNo } = data
    const user = `SELECT * FROM users WHERE firstname=? AND reg_no=?`
    conn.query(user, [firstname, regNo], (err, result) => {
      if (err) return Socket.emit('login response', {error:'Something went wrong'})
      if (result.length < 1) {
        Socket.emit('login response', {error: 'User not found'})
      }else{
        Socket.emit('login response', result)
      }
    })
  })
})

io.on("connection", (Socket) => { //Load previous messages
  Socket.on('chat message', (category) => { 
    // const msg = `SELECT * FROM chats WHERE category=?`
    const msg = `SELECT * FROM chats`
    conn.query(msg, (error, messages) => {
      if (messages) { //Sending message to all the connected sockets in real time
        return io.emit('chat message', messages);
      }
    })
  })
})

io.on("connection", (Socket) => {
  Socket.on('send message', (message) => { //Send message
    const { senderName, senderId, msg, category } = message
    const storemsg = `INSERT INTO chats(sender_name, sender_id, chat_message, category) VALUES (?, ?, ?, ?)`
    conn.query(storemsg, [senderName, senderId, msg, category], (err, result) => { })
  })
})

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




// INSERT INTO `student/lecturer`(`id`, `sender_name`, `sender_id`, `chat_message`, `category`, `time`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]')