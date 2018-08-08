import React, {Component} from 'React';
import PropTypes from 'prop-types';
import './chat-message.css';
import avatar from '../../resources/avatar.png';

export default class ChatWindow extends Component {

    render() {
        return (
            <div>
                <div className="chat-message">
                    <img src={avatar}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, </p>
                </div>
                <div className="chat-message reverse">
                    <img src={avatar}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                </div>
            </div>
        );
    }
}

ChatWindow.propTypes = {
    user: PropTypes.object,
    chatMessages: PropTypes.array
};