import { connect } from 'react-redux';
import MessagesCmp from '../components/Messages';

const mapStateToProps = state => ({
    messages: state.Messages,
});

export default connect(mapStateToProps, {})(MessagesCmp);