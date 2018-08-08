import {createStore, combineReducers, applyMiddleware} from 'redux';
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

import authenticationReducer from './authentication/authentication-reducer';
import authenticationMiddleware from './authentication/authentication-middleware';
import userReducer from './user/user-reducer';
import userMiddleware from './user/user-middleware';
import loadingReducer from './loading/loading-reducer';
import socketMiddleware from './chat/sockets-middleware'
import socketReducer from './chat/sockets-reducer';

export const history = createHistory();

const routeMiddleware = routerMiddleware(history);

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['authenticationReducer']
};

export let store = createStore(
    connectRouter(history)(
        persistReducer(
            rootPersistConfig,
            combineReducers({
                authenticationReducer,
                userReducer,
                loadingReducer,
                socketReducer
            })
        )),
    applyMiddleware(
        routeMiddleware,
        authenticationMiddleware,
        userMiddleware,
        socketMiddleware
    )
);

export let persistor = persistStore(store);




