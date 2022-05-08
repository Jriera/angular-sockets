const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});



app.get('/',(req, res) => {
    res.send('<h1>Hello World</h1>')
})

io.on('connection',(socket) =>{
    console.log('Client connected');
    socket.on('disconnect',()=>{
       console.log('Client disconnected');
    });
    socket.on('static message',(msg)=>{
        console.log(msg)
    })
})



http.listen(3000,()=>{
    console.log(`server connected at http:localhost:3000`)
})