import {actionTypes} from "./chat-actions";
import socketApi from '../../api/sockets/socketApi'

export default store => next => action => {
    switch (action.type) {
        case actionTypes.GO_ONLINE:
            let basicDetails = store.getState().userReducer.basicDetails;
            socketApi.goOnline(basicDetails.name, basicDetails.email);
            break;
        case actionTypes.EMIT_EVENT:
            socketApi.emitEvent(action.eventName, action.data);
            break;
        case actionTypes.REGISTER_EVENTS:
            socketApi.registerEvent(action.eventName, store);
            break;
        default:
            next(action);
    }
}