import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, author, postedAt }) => (
    <p>
        <i>{author} {postedAt}</i>: {message}
    </p>
);

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
};

export default Message;
