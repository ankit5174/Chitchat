import {actionTypes as authActionTypes} from "../authentication/authentication-action";
import {actionTypes} from "./user-action";

const DEFAULT_STATE = {
    isLoggedIn: false,
    basicDetails: {},
    trustedShareList: []
};

const updateUser = (state, payload) => {
    return {
        ...state,
        basicDetails: payload
    }
};

const setLoginStatus = (state, status) => {
    return {
        ...state,
        isLoggedIn: status
    }
};

const updateTrustedShare = (state, trustedShareTransactions) => {
    return {
        ...state,
        trustedShareList: trustedShareTransactions
    }
};

const createGuestShareLink = (state, guestTransactionID) => {
    return {
        ...state,
        guestShareLink: 'www.tracklive.co.in/share/'+guestTransactionID
    }
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN_WITH_PASSWORD_SUCCESS:
            return updateUser(state, action.payload);
        case authActionTypes.LOGIN_WITH_GOOGLE_SUCCESS:
            return updateUser(state, action.payload);
        case actionTypes.SET_LOGIN_STATUS:
            return setLoginStatus(state, action.status);
        case actionTypes.GET_TRUSTED_SHARE_SUCCESS:
            return updateTrustedShare(state, action.trustedShareTransactionList);
        case actionTypes.CREATE_GUEST_SHARE_SUCCESS:
            return createGuestShareLink(state, action.guestTransactionID);
        default:
            return state;
    }
}