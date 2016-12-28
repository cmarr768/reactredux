
const Users = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER_DATA_RECEIVED':
            return action.data
        default:
            return state
    }
};

export default Users;