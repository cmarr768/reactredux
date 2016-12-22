import Post from './Post';

const Posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                Post(undefined, action)
            ]
        default:
            return state
    }
};

export default Posts;