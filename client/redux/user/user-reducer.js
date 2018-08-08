import {actionTypes as authActionTypes} from "../authentication/authentication-action";
import {actionTypes} from "./user-action";

const DEFAULT_STATE = {
    isLoggedIn: false,
    basicDetails: {}
};

const updateUser = (state, payload) => {
    return {
        ...state,
        basicDetails: payload.data
    }
};

const setLoginStatus = (state, status) => {
    return {
        ...state,
        isLoggedIn: status
    }
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN_WITH_PASSWORD_SUCCESS:
            return updateUser(state, action.payload);
        case authActionTypes.CREATE_USER_SUCCESS:
            return updateUser(state, action.payload);
        case actionTypes.SET_LOGIN_STATUS:
            return setLoginStatus(state, action.status);
        default:
            return state;
    }
}