import {createStore, combineReducers, applyMiddleware} from 'redux';
import authenticationReducer from './authentication/authentication-reducer';
import authenticationMiddleware from './authentication/authentication-middleware';

export default function configureStore() {
    return createStore(
        combineReducers({
            authenticationReducer
        })
        ,
        applyMiddleware(
            authenticationMiddleware
        )
    );
}




