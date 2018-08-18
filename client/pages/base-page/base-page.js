import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import {Switch, Route, Redirect} from 'react-router-dom';
import './base-page.css';
import {actionTypes} from "../../redux/chat/chat-actions";
import WebView from '../../components/web/web-conatiner';
import MobileView from '../../components/mobile/mobile-container';

export default class BasePage extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.goOnline();
        this.props.emitEvent(actionTypes.GET_ONLINE_USERS);
        this.props.registerEvent(actionTypes.GET_ONLINE_USERS_SUCCESS);
        this.props.registerEvent(actionTypes.USER_DISCONNECTED);
        this.props.registerEvent(actionTypes.NEW_USER_CONNECTED);
        this.props.registerEvent(actionTypes.NEW_MESSAGE_RECEIVED);
    }

    render() {

        return (
            <div className="wrapper">

                {/*<WebView/>*/}
                <MediaQuery query="(min-width: 1024px)">
                    <Switch>
                        <Route path="/home/w" component={() => <WebView/>}/>
                        <Redirect to="/home/w"/>
                    </Switch>
                </MediaQuery>
                <MediaQuery query="(max-width: 1024px)">
                    <Switch>
                        <Route path="/home/m" component={() => <MobileView/>}/>
                        <Redirect to="/home/m"/>
                    </Switch>
                </MediaQuery>
            </div>
        );
    }
}

BasePage.propTypes = {
    goOnline: PropTypes.func,
    emitEvent: PropTypes.func,
    registerEvent: PropTypes.func
};