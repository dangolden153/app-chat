const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const {addUser, removeUser, getUser, getUserInROom} = require('./user');
const PORT =process.env.PORT || 8000 ;
const router =require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

 
////////////////////////////////////////////////////

io.on('connection', (socket) =>{
console.log('we are connected');


socket.on('join', ({ name, room}, callback)=>{
const {error, user} = addUser({id: socket.id, name, room});

if (error) return callback(error);
socket.emit('message', {user:'Admin', text: `${user.name}, is welcome to room ${user.room}`});

socket.broadcast.to(user.room).emit('message', {user:'Admin',text:`${user.name}, is welcome`});

socket.join(user.room);

io.to(user.room).emit('roomData', {room: user.room, users: getUserInROom(user.room)})
callback() ;
});
 

 

socket.on('sendMessage', (message, callback)=>{
    const  user = getUser(socket.id);

io.to(user.room).emit('message', {user: user.name, text: message})

io.to(user.room).emit('roomData', {room: user.room, users: getUserInROom(user.room)})

callback();
});     
  



 




    socket.on('disconnect', ()=>{
        const user = removeUser(socket.id)

        if (user){
    io.to(user.room).emit('message', {user: 'Admin', text: `${user.name} has left.`})
        }
    })
})



app.use(router);
server.listen(PORT , ()=> console.log(`server has started on ${PORT}`));
