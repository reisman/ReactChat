import { takeEvery } from 'redux-saga/effects';
import * as keys from '../constants/ActionKeys';

const handleMessage = function* handleMessage(params) {
    yield takeEvery(keys.ADD_MESSAGE, (action) => {
        action.author = params.username,
        params.socket.send(JSON.stringify(action));
    });
};

export default handleMessage;