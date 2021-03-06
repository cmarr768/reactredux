const Comment = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return {
                postId: action.postId,
                id: action.id,
                author: action.author,
                text: action.text
            }

        default:
            return state
    }
};

export default Comment;