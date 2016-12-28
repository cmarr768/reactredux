import Comment from './Comment';

const Comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                Comment(undefined, action)
            ]
        case 'GET_COMMENTS_DATA_RECEIVED':
            return action.data
        default:
            return state
    }
};

export default Comments;