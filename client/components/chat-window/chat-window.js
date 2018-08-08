import React, {Component} from 'React';
import PropTypes from 'prop-types';
import ChatMessage from '../chat-message/chat-message';
import './chat-window.css';
import TextareAutosize from 'react-autosize-textarea'

export default class ChatWindow extends Component {

    render() {
        return (
            <div className="chat-window-conatiner">
                <div className="chat-messages">
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                    <ChatMessage/>
                </div>
                <div className="chat-input-message"  contentEditable={true}>
                    {/*<TextareAutosize*/}
                        {/*theme={{*/}
                            {/*textarea: {*/}
                                {/*fontSize: '18px',*/}
                                {/*borderColor: 'green'*/}
                            {/*}*/}
                        {/*}}*/}
                    {/*/>*/}
                </div>
            </div>
        );
    }
}

ChatWindow.propTypes = {
    user: PropTypes.object,
    chatMessages: PropTypes.array
};

