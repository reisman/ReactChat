import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import NewUserCmp from '../components/NewUser';
import { setUserName } from '../actions';

const mapDispatchToProps = dispatch => ({
    setUserName: (name) => {
        dispatch(setUserName(name));
        dispatch(push('/chat'));
    },
});

export default connect(null, mapDispatchToProps)(NewUserCmp);
