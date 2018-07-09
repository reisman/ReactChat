import { connect } from 'react-redux';
import AddMessageCmp from '../components/NewMessage';
import { addMessage } from '../actions';

const mapDispatchToProps = dispatch => ({
    addNewMessage: (message, author) => {
        dispatch(addMessage(message, author));
    },
});

export default connect(null, mapDispatchToProps)(AddMessageCmp);
