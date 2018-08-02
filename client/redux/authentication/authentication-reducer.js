import {actionTypes} from "./authentication-action";

const DEFAULT_STATE = {
    isLoggedIn: false
};

const onLoginFailure = (state, payload) => {
       switch (payload.code) {
        case 'auth/user-not-found':
            return {
                errorCode: payload.code,
                errorMessage: 'User Not Found. Please sign up'
            };
        case 'auth/wrong-password':
            return {
                errorCode: payload.code,
                errorMessage: 'Please enter a correct password'
            };
        case 'auth/popup-closed-by-user':
            return {
                errorCode: payload.code,
                errorMessage: 'Login Cancelled! Please try again'
            };
        default:
            return state;
    }
};

const onPasswordReset = (state, payload) => {
    switch (payload.code) {
        case 'auth/password reset success':
            return {
                messageCode: payload.code,
                message: payload.message
            };
        case 'auth/password reset failed':
            return {
                errorCode: payload.code,
                errorMessage: payload.message
            };
        default:
            return state;
    }
}

export default (state=DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_WITH_PASSWORD_FAILED:
            return onLoginFailure(state, action.payload);
        case actionTypes.LOGIN_WITH_GOOGLE_FAILED:
            return onLoginFailure(state, action.payload);
        case actionTypes.SEND_RESET_PASSWORD_MAIL_FAILED:
        case actionTypes.SEND_RESET_PASSWORD_MAIL_SUCCESS:
            return onPasswordReset(state, action.payload);
        case actionTypes.CLEAR_AUTHENTICATION:
            return DEFAULT_STATE;
        default:
            return state;
    }
}