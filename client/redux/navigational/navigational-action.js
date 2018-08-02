export const actionTypes = {
    SET_REDIRECT_URL: 'SET_REDIRECT_URL'
};

export const setRedirectUrl = (url) => {
    return {
        type: actionTypes.SET_REDIRECT_URL,
        url: url
    }
};
