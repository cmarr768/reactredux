import Post from './Post';

const Posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                Post(undefined, action)
            ]
        case 'GET_POSTS_DATA_RECEIVED':
            return action.data
        default:
            return state
    }
};

export default Posts;