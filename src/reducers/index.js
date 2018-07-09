import { combineReducers } from 'redux';
import Messages from './Messages';
import Users from './Users';

const chat = combineReducers({
    Messages,
    Users,
});

export default chat;