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
        createUser: (name, email, password) => {
            dispatch(createUser(name, email, password))
        },
        loginWithPassword: (email, password) => {
            dispatch(loginWithPassword(email, password))
        },
        clearAuthentication: () => {
            dispatch(clearAuthentication())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));