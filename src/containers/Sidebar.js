import { connect } from 'react-redux';
import SidebarCmp from '../components/Sidebar';

const mapStateToProps = state => ({
    users: state.Users.users,
});

export default connect(mapStateToProps, {})(SidebarCmp);
