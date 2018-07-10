import { takeEvery } from 'redux-saga/effects';
import { ADD_MESSAGE } from '../constants/ActionKeys';

const handleMessage = function* handleMessage(params) {
    yield takeEvery(ADD_MESSAGE, (action) => {
        action.author = params.username;
        params.socket.send(JSON.stringify(action));
    });
};

export default handleMessage;
