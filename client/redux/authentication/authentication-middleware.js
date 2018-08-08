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
        case actionTypes.CREATE_USER:
            createUser(store, action.name, action.email, action.password);
            break;
        default:
            next(action);
    }
}