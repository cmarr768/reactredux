import Comment from './Comment';

const Comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                Comment(undefined, action)
            ]
        default:
            return state
    }
};

export default Comments;