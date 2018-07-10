import { ADD_USER, LIST_USERS, SET_NAME } from '../constants/ActionKeys';

const initialState = {
    username: '',
    users: [],
};

const Users = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                username: state.username,
                users: [
                    ...state.users,
                    {
                        name: action.name,
                        id: action.id,
                    },
                ],
            };
        case SET_NAME:
            return {
                username: action.name,
                users: state.users,
            };
        case LIST_USERS:
            return {
                username: state.username,
                users: action.users,
            };
        default:
            return state;
    }
};

export default Users;
