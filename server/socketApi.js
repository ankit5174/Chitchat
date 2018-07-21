import socket_io from 'socket.io';

let socketApi = {};
let io = socket_io();
socketApi.io = io;

//Listeners
io.on('connection', function(socket){
    console.log('A user connected');
});



module.exports = socketApi;
