import * as keys from '../constants/ActionKeys';
import { addUser, receivedMessage, listUsers } from '../actions';

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:3002');
    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: keys.ADD_USER,
            name: username,
        }));
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        switch (data.type) {
            case keys.ADD_MESSAGE:
                dispatch(receivedMessage(data.message, data.author));
                break;
            case keys.ADD_USER:
                dispatch(addUser(data.name));
                break;
            case keys.LIST_USERS:
                dispatch(listUsers(data.users));
                break;
            default:
                break;
        }
    };

    return socket;
};

export default setupSocket;
