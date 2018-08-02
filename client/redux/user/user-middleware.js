import {actionTypes} from "./user-action";
import {getTrustedShare, createGuestShare} from "./user-service";


export default store => next => action => {
    switch (action.type) {
        case actionTypes.GET_TRUSTED_SHARE:
            getTrustedShare(store, action.uid);
            break;
        case actionTypes.CREATE_GUEST_SHARE:
            createGuestShare(store, action.guestShareTransactionDetails);
            break;
        default:
            next(action);
    }
    next(action);
}