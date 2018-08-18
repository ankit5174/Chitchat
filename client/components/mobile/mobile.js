import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import ChatWindow from '../chat-window/chat-window-container';
import TopNavBar from '../top-nav-bar/top-nav-bar';
import './mobile.css';

export default class WebView extends Component {

    constructor() {
        super();
    }

    render() {
        let {
            user,
            onlineUsers,
            setChattingTo
        } = this.props;
        console.log(this.props.match);
        return (
            <div>
                <TopNavBar baseUrl={this.props.match.url}/>
                <div className="Container">
                    <Switch>
                        <Route path={`${this.props.match.url}/members`} component={()=><div>members</div>}/>
                        <Route path={`${this.props.match.url}/chat`} component={()=><ChatWindow/>}/>
                        <Route path={`${this.props.match.url}/recent`} component={()=><div>recents</div>}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

WebView.propTypes = {
    onlineUsers: PropTypes.object,
    setChattingTo: PropTypes.func,
    user: PropTypes.object
};