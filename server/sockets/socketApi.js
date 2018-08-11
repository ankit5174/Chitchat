import socket_io from 'socket.io';
import {utilityUtil} from "../util/utilityUtil";


let socketApi = {};
let io = socket_io();
socketApi.io = io;

let usersCount = 0;
let users = {};

//Listeners
io.on('connection', function (socket) {

    let cookie = socket.handshake.headers.cookie;
    let userId = utilityUtil.readCookie('user_id', cookie);
    let name = utilityUtil.readCookie('name', cookie);
    console.log(userId);
    console.log(name);
    users[userId] = {
        socket,
        name
    };
    usersCount++;
    console.log('connected'+usersCount);
    socket.broadcast.emit('NEW_USER_CONNECTED', {[userId]:name});

    socket.on('GET_ONLINE_USERS', () => {
        socket.emit('GET_ONLINE_USERS_SUCCESS', utilityUtil.getOnlineUsers(users, userId))
    });

    socket.on('SEND_NEW_MESSAGE', (messagePacket) => {
        console.log(messagePacket);
        users[messagePacket.to].socket.emit('NEW_MESSAGE_RECEIVED', utilityUtil.getNewMessagePacket(messagePacket));
    });



    socket.on('disconnect', () => {
        usersCount--;
        delete users[userId];
        socket.broadcast.emit('USER_DISCONNECTED', {userId});
        console.log('disconnected'+usersCount);
    })
});

module.exports = socketApi;
