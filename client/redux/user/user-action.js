export const actionTypes = {
    SET_LOGIN_STATUS: 'SET_LOGIN_STATUS'
};

export const setLoginStatus = (status) => {
    return {
        type: actionTypes.SET_LOGIN_STATUS,
        status: status
    }
};