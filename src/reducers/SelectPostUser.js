const SelectPostUser = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_POST_USER':
            return {
                name: action.name
            }

        default:
            return state
    }
};

export default SelectPostUser;