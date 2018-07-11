import { connect } from 'react-redux';
import MessagesCmp from '../components/Messages';

const mapStateToProps = state => ({
    messages: state.Messages.map(msg => ({
        ...msg,
        postedAt: msg.postedAt.format('HH:mm:ss'),
    })),
});

export default connect(mapStateToProps, {})(MessagesCmp);
