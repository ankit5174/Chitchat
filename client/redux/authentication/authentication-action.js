export const actionTypes = {
    CREATE_USER: 'CREATE_USERNAME_PASSWORD',
    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',
    LOGIN_WITH_PASSWORD:'LOGIN_WITH_PASSWORD',
    LOGIN_WITH_PASSWORD_SUCCESS:'LOGIN_WITH_PASSWORD_SUCCESS',
    LOGIN_WITH_PASSWORD_FAILED:'LOGIN_WITH_PASSWORD_FAILED',
    CLEAR_AUTHENTICATION: 'CLEAR_AUTHENTICATION'
};

export const createUser = (name, email, password) => {
    return {
        type: actionTypes.CREATE_USER,
        name: name,
        email: email,
        password: password
    }
};

export const createUserSuccess = (response) => {
    return {
        type: actionTypes.CREATE_USER_SUCCESS,
        payload: response
    }
};

export const createUserFailed = (response) => {
    return {
        type: actionTypes.CREATE_USER_FAILED,
        payload: response
    }
};

export const loginWithPassword = (email, password) => {
    return {
        type: actionTypes.LOGIN_WITH_PASSWORD,
        email: email,
        password: password
    }
};

export const loginWithPasswordSuccess = (response) => {
    return {
        type: actionTypes.LOGIN_WITH_PASSWORD_SUCCESS,
        payload: response
    }
};

export const loginWithPasswordFailed = (response) => {
    return {
        type: actionTypes.LOGIN_WITH_PASSWORD_FAILED,
        payload: response
    }
};

export const clearAuthentication = () => {
    return {
        type: actionTypes.CLEAR_AUTHENTICATION
    }
};

// export const loginWithGoogle = () => {
//     return {
//         type: actionTypes.LOGIN_WITH_GOOGLE
//     }
// };
//
// export const loginWithGoogleSuccess = (response) => {
//     return {
//         type: actionTypes.LOGIN_WITH_GOOGLE_SUCCESS,
//         payload: response
//     }
// };

// export const loginWithGoogleFailed = (response) => {
//     return {
//         type: actionTypes.LOGIN_WITH_GOOGLE_FAILED,
//         payload: response
//     }
// };

// export const sendResetPasswordMail = (email) => {
//     return {
//         type: actionTypes.SEND_RESET_PASSWORD_MAIL,
//         email: email
//     }
// };
//
// export const sendResetPasswordMailSuccess = (response) => {
//     return {
//         type: actionTypes.SEND_RESET_PASSWORD_MAIL_SUCCESS,
//         payload: response
//     }
// };
//
// export const sendResetPasswordMailFailed = (response) => {
//     return {
//         type: actionTypes.SEND_RESET_PASSWORD_MAIL_FAILED,
//         payload: response
//     }
// };
//
