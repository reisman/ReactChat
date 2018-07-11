import * as moment from 'moment';
import * as keys from '../constants/ActionKeys';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
    type: keys.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author,
    postedAt: moment(),
});

export const addUser = name => ({
    type: keys.ADD_USER,
    id: nextUserId++,
    name,
});

export const receivedMessage = (message, author, postedAt) => ({
    type: keys.RECEIVED_MESSAGE,
    id: nextMessageId++,
    message,
    author,
    postedAt: moment(postedAt),
});

export const listUsers = users => ({
    type: keys.LIST_USERS,
    users,
});

export const setUserName = name => ({
    type: keys.SET_NAME,
    name,
});
