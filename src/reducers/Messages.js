import * as moment from 'moment';
import { ADD_MESSAGE, RECEIVED_MESSAGE } from '../constants/ActionKeys';

const Messages = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
        case RECEIVED_MESSAGE:
            return [
                ...state,
                {
                    id: action.id,
                    message: action.message,
                    author: action.author,
                    postedAt: action.postedAt,
                },
            ];
        default:
            return state;
    }
};

export default Messages;
