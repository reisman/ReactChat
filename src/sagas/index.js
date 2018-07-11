import { takeEvery } from 'redux-saga/effects';
import { ADD_MESSAGE, ADD_USER, SET_NAME } from '../constants/ActionKeys';

const handleMessage = function* handleMessage(params) {
    yield takeEvery([ADD_MESSAGE, SET_NAME], (action) => {
        const { socket } = params;

        if (action.type === SET_NAME) {
            const message = JSON.stringify({
                type: ADD_USER,
                name: action.name,
            });
            socket.send(message);
        } else {
            const message = {
                id: action.id,
                type: action.type,
                author: params.usernameAccess(),
                message: action.message,
                postedAt: action.postedAt,
            };
            socket.send(JSON.stringify(message));
        }
    });
};

export default handleMessage;
