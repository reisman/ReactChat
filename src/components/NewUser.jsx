import React from 'react';
import PropTypes from 'prop-types';

const NewUser = ({ setUserName }) => {
    const onKeyPressed = (e) => {
        if (e.key === 'Enter') {
            setUserName(e.target.value);
        }
    };

    return (
        <div>
            <h1>Please enter your username:</h1>
            <input type="text" onKeyPress={onKeyPressed} />
        </div>
    );
};

NewUser.propTypes = ({
    setUserName: PropTypes.func.isRequired,
});

export default NewUser;
