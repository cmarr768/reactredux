//Action for adding a new comment.
let nextCommentId = 0;
const AddComment = (author, text) => {
    return {
        type: 'ADD_COMMENT',
        id: nextCommentId++,
        author: author,
        text: text
    }
};

export default AddComment;