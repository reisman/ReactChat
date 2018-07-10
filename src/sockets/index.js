import { ADD_MESSAGE, ADD_USER, LIST_USERS } from '../constants/ActionKeys';
import { addUser, receivedMessage, listUsers } from '../actions';

const setupSocket = (dispatch) => {
    const socket = new WebSocket('ws://localhost:3002');

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        switch (data.type) {
            case ADD_MESSAGE:
                dispatch(receivedMessage(data.message, data.author));
                break;
            case ADD_USER:
                dispatch(addUser(data.name));
                break;
            case LIST_USERS:
                dispatch(listUsers(data.users));
                break;
            default:
                break;
        }
    };

    return socket;
};

export default setupSocket;
