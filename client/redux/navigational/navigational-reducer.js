import {actionTypes} from "./navigational-action";

const DEFAULT_STATE = {
    redirectUrl: '/home'
};

const setRedirectUrl = (state, url) => {
    return {
        ...state,
        redirectUrl: url
    }
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case actionTypes.SET_REDIRECT_URL:
            return setRedirectUrl(state, action.url);
        default:
            return state;
    }
}
