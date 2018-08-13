import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './chat-message.css';
import avatar from '../../resources/avatar.png';

export default class ChatMessage extends Component {

    render() {
        let {message} = this.props;
        return (
            <div>
                <div className={message.to ? 'chat-message reverse': 'chat-message'}>
                    <img src={avatar}/>
                    <p>{message.message}</p>
                </div>
            </div>
        );
    }
}

ChatMessage.propTypes = {
    message: PropTypes.object
};