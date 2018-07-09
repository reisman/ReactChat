import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const Messages = ({ messages }) => {
    return (
        <section id="messages">
            <ul>
                {messages.map(msg => (
                    <Message key={msg.id} {...msg} />
                ))}
            </ul>
        </section>
    )
};

Messages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};

export default Messages;