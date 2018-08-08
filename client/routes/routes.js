import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import AuthRoute from './auth-route/auth-route-container'
import LoginPage from "../pages/login-page/login-page-container";
import BasePage from "../pages/base-page/base-page-container";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <AuthRoute path="/login" component={LoginPage}/>
                <AuthRoute path="/home" component={BasePage}/>
                <Redirect to='/home'/>
            </Switch>
        );
    }
}



export default Routes;
