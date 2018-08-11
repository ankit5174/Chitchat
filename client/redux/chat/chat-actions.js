export const actionTypes = {
    GO_ONLINE:"GO_ONLINE",
    EMIT_EVENT:"EMIT_EVENT",
    REGISTER_EVENTS: "REGISTER_EVENTS",
    UNREGISTER_EVENTS: "UNREGISTER_EVENTS",
    GET_ONLINE_USERS: "GET_ONLINE_USERS",
    GET_ONLINE_USERS_SUCCESS: "GET_ONLINE_USERS_SUCCESS",
    USER_DISCONNECTED: "USER_DISCONNECTED",
    NEW_USER_CONNECTED: "NEW_USER_CONNECTED",
    SEND_NEW_MESSAGE: "SEND_NEW_MESSAGE",
    NEW_MESSAGE_RECEIVED: "NEW_MESSAGE_RECEIVED",
    SET_CHATTING_TO: "SET_CHATTING_TO"
};

export const goOnline = () => {
    return {
        type: actionTypes.GO_ONLINE
    }
};

export const emitEvent = (eventName, data) => {
      return {
          type: actionTypes.EMIT_EVENT,
          eventName: eventName,
          data: data
      }
};

export const registerEvent = (eventName) => {
    return {
        type: actionTypes.REGISTER_EVENTS,
        eventName: eventName
    }
};

export const unRegisterEvent = (eventName) => {
    return {
        type: actionTypes.UNREGISTER_EVENTS
    }
};

export const getOnlineUsersSuccess = (onlineUsers) => {
    return {
        type: actionTypes.GET_ONLINE_USERS_SUCCESS,
        onlineUsers: onlineUsers
    }
};

export const userDisconnected = (disconnectedUser) => {
    return {
        type: actionTypes.USER_DISCONNECTED,
        disconnectedUser: disconnectedUser
    }
};

export const newUserConnected = (connectedUser) => {
    return {
        type: actionTypes.NEW_USER_CONNECTED,
        connectedUser: connectedUser
    }
};

export const sendNewMessage = (messagePacket) => {
    return {
        type: actionTypes.SEND_NEW_MESSAGE,
        messagePacket: messagePacket
    }
};

export const newMessageReceived = (messagePacket) => {
    return {
        type: actionTypes.NEW_MESSAGE_RECEIVED,
        messagePacket: messagePacket
    }
};

export const setChattingTo = (chattingTo) => {
    return {
        type: actionTypes.SET_CHATTING_TO,
        chattingTo: chattingTo
    }
};
