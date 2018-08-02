import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    loginWithPassword,
    loginWithGoogle,
    createUser,
    sendResetPasswordMail,
    clearAuthentication
} from "../../redux/authentication/authentication-action";
import LoginPage from './login-page';


function mapStateToProps(state) {
    return {
        errorCode: state.authenticationReducer.errorCode,
        errorMessage: state.authenticationReducer.errorMessage,
        messageCode: state.authenticationReducer.messageCode,
        message: state.authenticationReducer.message
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createUser: (email, password) => {
            dispatch(createUser(email, password))
        },
        loginWithPassword: (email, password) => {
            dispatch(loginWithPassword(email, password))
        },
        loginWithGoogle: () => {
            dispatch(loginWithGoogle());
        },
        sendResetPasswordMail: (email) => {
            dispatch(sendResetPasswordMail(email))
        },
        clearAuthentication: () => {
            dispatch(clearAuthentication())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));