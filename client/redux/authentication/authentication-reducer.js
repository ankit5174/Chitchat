import {actionTypes} from "./authentication-action";

const DEFAULT_STATE = {};

const onFailure = (state, payload) => {
    return {
        errorCode: payload.data.status,
        errorMessage: payload.data.message
    };
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
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_WITH_PASSWORD_FAILED:
        case actionTypes.CREATE_USER_FAILED:
            return onFailure(state, action.payload);
        case actionTypes.CLEAR_AUTHENTICATION:
            return DEFAULT_STATE;
        default:
            return state;
    }
}