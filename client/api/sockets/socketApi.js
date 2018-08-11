import io from 'socket.io-client';
import cookie from 'react-cookies';
import {utils} from "../../util/util";
import {
    getOnlineUsersSuccess, actionTypes, userDisconnected,
    newUserConnected, newMessageReceived
} from "../../redux/chat/chat-actions";

let socketApi = {
    io: io,
    goOnline: (name, email) => {
        if (socketApi.io && !socketApi.socket) {
            if (!cookie.load('user_id') && !cookie.load('user_id')) {
                cookie.save('user_id', email);
                cookie.save('name', name);
            }
            socketApi.socket = io.connect(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : window.location.protocol + window.location.host);
        }
    },
    registerEvent: (eventName, store) => {
        switch (eventName) {
            case actionTypes.GET_ONLINE_USERS_SUCCESS:
                socketApi.socket.on(eventName, (onlineUsers) => {
                    store.dispatch(getOnlineUsersSuccess(onlineUsers));
                });
                break;
            case actionTypes.USER_DISCONNECTED:
                socketApi.socket.on(eventName, (disconnectedUser) => {
                    store.dispatch(userDisconnected(disconnectedUser));
                });
                break;
            case actionTypes.NEW_USER_CONNECTED:
                socketApi.socket.on(eventName, (connectedUser) => {
                    store.dispatch(newUserConnected(connectedUser));
                });
            case actionTypes.NEW_MESSAGE_RECEIVED:
                socketApi.socket.on(eventName, (messagePacket) => {
                    console.log(messagePacket);
                    store.dispatch(newMessageReceived(messagePacket));
                });
            default:
                break;
        }
    },
    emitEvent: (eventName, data) => {
        socketApi.socket.emit(eventName, data);
    }
};

export default socketApi;
