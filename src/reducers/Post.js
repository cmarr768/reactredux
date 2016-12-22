const Post = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                id: action.id,
                author: action.author,
                text: action.text
            }

        default:
            return state
    }
};

export default Post;