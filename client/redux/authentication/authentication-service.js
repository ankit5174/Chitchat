import {authentication} from '../../api/server/authentication'
import {
    loginWithPasswordSuccess,
    loginWithPasswordFailed,
    createUserSuccess,
    createUserFailed
} from "./authentication-action";
import {setLoginStatus} from "../user/user-action";
import {push} from 'connected-react-router';

export const loginWithPassword = (store, email, password) => {
    console.log(email, password);
    authentication.loginWithPassword(email, password)
        .then((response) => {
            store.dispatch(loginWithPasswordSuccess(response));
            store.dispatch(setLoginStatus(true));
            store.dispatch(push('/home'));

        }).catch((err) => {
            store.dispatch(loginWithPasswordFailed(err));
    });
};


export const createUser = (store, name, email, password) => {
    authentication.createUser(name, email, password)
        .then((response) => {
            store.dispatch(createUserSuccess(response));
            store.dispatch(setLoginStatus(true));
            store.dispatch(push('/home'));
        })
        .catch((err) => {
            store.dispatch(createUserFailed(err));
        })
};

// export const sendPasswordResetMail = (store, email) => {
//     firebaseAuth.sendPasswordResetMail(email)
//         .then((response) => {
//             store.dispatch(sendResetPasswordMailSuccess(response));
//         })
//         .catch((err) => {
//             store.dispatch(sendResetPasswordMailFailed(err));
//         })
// };