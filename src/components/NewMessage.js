import React from 'react';
import PropTypes from 'prop-types';

const NewMessage = (props) => {
    let input
    return (
        <section id="new-message">
            <input onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    props.addNewMessage(input.value, 'Me');
                    input.value = '';
                }
            }}
            type="text"
            ref={(node) => {
                input = node;
            }}
            />
        </section>
    );
};

NewMessage.propTypes = {
    addNewMessage: PropTypes.func.isRequired,
};

export default NewMessage;
