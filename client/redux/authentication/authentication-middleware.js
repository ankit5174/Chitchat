import {actionTypes} from "./authentication-action";
import {
    loginWithPassword,
    loginWithGoogle,
    createUser,
    sendPasswordResetMail
} from "./authentication-service";

export default store => next => action => {
    switch (action.type) {
        case actionTypes.LOGIN_WITH_PASSWORD:
            loginWithPassword(store, action.email, action.password);
            break;
        case actionTypes.LOGIN_WITH_GOOGLE:
            loginWithGoogle(store);
            break;
        case actionTypes.CREATE_USER:
            createUser(store, action.email, action.password);
            break;
        case actionTypes.SEND_RESET_PASSWORD_MAIL:
            sendPasswordResetMail(store, action.email);
            break;
        default:
            next(action);
    }
}