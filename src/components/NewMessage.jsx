import React from 'react';
import PropTypes from 'prop-types';

const NewMessage = (props) => {
    let input;

    const sendMessage = (e) => {
        if (e.key === 'Enter') {
            const { target } = e;
            props.addNewMessage(target.value, 'Me');
            target.value = '';
        }
    };

    return (
        <section id="newmessage">
            <input type="text" onKeyPress={sendMessage} ref={(node) => { input = node; }} />
        </section>
    );
};

NewMessage.propTypes = {
    addNewMessage: PropTypes.func.isRequired,
};

export default NewMessage;
