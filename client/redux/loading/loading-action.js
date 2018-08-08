export const actionTypes = {
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING'
};

export const startLoading = () => {
    return {
        type: actionTypes.START_LOADING
    }
};

export const stopLoading = () => {
    return {
        type: actionTypes.STOP_LOADING
    }
};
