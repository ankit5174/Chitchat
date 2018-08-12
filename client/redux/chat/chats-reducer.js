import {actionTypes} from "./chat-actions";
import socketApi from "../../api/sockets/socketApi";

let DEFAULT_STATE = {
    onlineUsers: {},
    recentChats: {},
    chattingTo: ''
};

const getOnlineUsersSuccess = (state, onlineUsers) => {
    return {
        ...state,
        onlineUsers: onlineUsers
    }
};

const updateOnlineUsersOnDisconnection = (state, disconnectedUser) => {
    delete state.onlineUsers[disconnectedUser.userId];
    let onlineUsers = {...state.onlineUsers};
    return {
        ...state,
        onlineUsers: onlineUsers
    }
};

const onNewUserConnection = (state, connectedUser) => {
    let onlineUsers = {
        ...state.onlineUsers,
        ...connectedUser
    };
    return {
        ...state,
        onlineUsers: onlineUsers
    }
};

const updateSendMessageToRecentChat = (state, messagePacket) => {
    return updateMessageToRecentChat(state,messagePacket, messagePacket.to);
};

const updateNewMessageToRecentChat = (state, messagePacket) => {
    return updateMessageToRecentChat(state,messagePacket, messagePacket.from);
};

const updateMessageToRecentChat = (state, messagePacket, user_id) => {
    let userID = state.recentChats[user_id];
    if (!userID) {
        let messages = [];
        messages.push(messagePacket);
        return {
            ...state,
            recentChats:{
                ...state.recentChats,
                [user_id] : {messages: messages}
            }
        }
    } else {
        let messages = state.recentChats[user_id].messages;
        return {
            ...state,
            recentChats: {
                ...state.recentChats,
                [user_id]: {
                    messages:[
                        ...messages.slice(0, messages.length),
                        messagePacket
                    ]
                }
            }
        }
    }
};

const updateChattingTo = (state, chattingTo) => {
    return {
        ...state,
        chattingTo: chattingTo
    }
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_ONLINE_USERS_SUCCESS:
            return getOnlineUsersSuccess(state, action.onlineUsers);
        case actionTypes.USER_DISCONNECTED:
            return updateOnlineUsersOnDisconnection(state, action.disconnectedUser);
        case actionTypes.NEW_USER_CONNECTED:
            return onNewUserConnection(state, action.connectedUser);
        case actionTypes.SEND_NEW_MESSAGE:
            return updateSendMessageToRecentChat(state, action.messagePacket);
        case actionTypes.NEW_MESSAGE_RECEIVED:
            return updateNewMessageToRecentChat(state, action.messagePacket);
        case actionTypes.SET_CHATTING_TO:
            return updateChattingTo(state, action.chattingTo);
        default:
            return state;
    }
}