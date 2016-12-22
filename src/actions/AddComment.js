//Action for adding a new comment.
let nextCommentId = 0;
const AddComment = (postId, author, text) => {
    return {
        type: 'ADD_COMMENT',
        postId: postId,
        id: nextCommentId++,
        author: author,
        text: text
    }
};

export default AddComment;