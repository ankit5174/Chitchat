const DEFAULT_STATE = {
    loading: false
};

const startLoading = (state) => {
    return {
        ...state,
        loading: true
    }
};

const stopLoading = (state) => {
    return {
        ...state,
        loading: false
    }
};


export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        default:
            return state;
    }
}