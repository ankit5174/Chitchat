import {
    loginWithPasswordSuccess,
    loginWithPasswordFailed,
    loginWithGoogleSuccess,
    loginWithGoogleFailed,
    createUserSuccess,
    createUserFailed,
    sendResetPasswordMailSuccess,
    sendResetPasswordMailFailed
} from "./authentication-action";

export const loginWithPassword = (store, email, password) => {

};

// export const loginWithGoogle = (store) => {
//     firebaseAuth.loginWithGoogle()
//         .then((response) => {
//             store.dispatch(loginWithGoogleSuccess(response));
//             store.dispatch(setLoginStatus(true));
//             store.dispatch(push('/home'));
//         })
//         .catch((err) => {
//             console.log(err);
//             store.dispatch(loginWithGoogleFailed(err));
//         })
// };
//
// export const createUser = (store, email, password) => {
//     firebaseAuth.createUser(email, password)
//         .then((response) => {
//             store.dispatch(createUserSuccess(response));
//             store.dispatch(setLoginStatus(true));
//             store.dispatch(push('/home'));
//         })
//         .catch((err) => {
//             console.log(err);
//             store.dispatch(createUserFailed(err));
//         })
// };
//
// export const sendPasswordResetMail = (store, email) => {
//     firebaseAuth.sendPasswordResetMail(email)
//         .then((response) => {
//             store.dispatch(sendResetPasswordMailSuccess(response));
//         })
//         .catch((err) => {
//             store.dispatch(sendResetPasswordMailFailed(err));
//         })
// };