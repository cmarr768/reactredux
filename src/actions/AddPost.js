//Action for adding a new comment.
let nextPostId = 0;
const AddPost = (author, text) => {
    return {
        type: 'ADD_POST',
        id: nextPostId++,
        author: author,
        text: text
    }
};

export default AddPost;