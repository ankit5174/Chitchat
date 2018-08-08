import React from 'react';
import {Route, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

class AuthRoute extends Route {

    componentDidMount() {
        let {isLoggedIn, currentUrl} = this.props;

        if (!isLoggedIn) {
            this.props.setRedirectUrl(currentUrl);
        }
    }

    render() {
        let {isLoggedIn, path} = this.props;

        if (!isLoggedIn) {
            if (path === '/login') {
                return <this.props.component/>
            } else {
                return <Redirect to="/login"/>
            }
        } else if (path === '/login') {
            return <Redirect to='/home'/>
        } else {
            return <this.props.component/>
        }
    }
}

export default AuthRoute;

AuthRoute.propTypes = {
    isLoggedIn: PropTypes.bool,
    currentUrl: PropTypes.string
};