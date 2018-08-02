import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthRoute from './auth-route';
import {setRedirectUrl} from "../../redux/navigational/navigational-action";
import authenticationReducer from "../../redux/authentication/authentication-reducer";


function mapStateToProps(state, props) {
    return {
        isLoggedIn: state.authenticationReducer.isLoggedIn,
        currentUrl: props.location.pathname
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRedirectUrl: (url)=>dispatch(setRedirectUrl(url))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRoute));