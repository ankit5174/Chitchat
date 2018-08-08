import {actionTypes} from "./socket-actions";
import socketApi from "../../api/sockets/socketApi";

let DEFAULT_STATE = {
    onlineUsers: {}
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

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_ONLINE_USERS_SUCCESS:
            return getOnlineUsersSuccess(state, action.onlineUsers);
        case actionTypes.USER_DISCONNECTED:
            return updateOnlineUsersOnDisconnection(state, action.disconnectedUser);
        case actionTypes.NEW_USER_CONNECTED:
            return onNewUserConnection(state, action.connectedUser);
        default:
            return state;
    }
}