import { ADD_USER, LIST_USERS } from './../constants/ActionKeys';

const Users = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    name: action.name,
                    id: action.id,
                }
            ];
        case LIST_USERS:
            return action.users;
        default:
            return state;
    }
};

export default Users;