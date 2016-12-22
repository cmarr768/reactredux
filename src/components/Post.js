import React, { PropTypes } from 'react';
import CommentList from './CommentList';
import CommentFormContainer from '../containers/CommentFormContainer';

//A post will have the author, text, and comments.
const Post = ({ id, author, text, Comments }) => {
    return (
        <div>
            <div className="card blue darken-1 z-depth-4">
                <div className="card-content white-text">
                    <span className="card-title">{author}</span>
                    <p>{text}</p>
                </div>
            </div>
            <div className="clearfix" style={{ marginLeft: 20 + 'px' }}>
                <CommentList Comments={Comments} />
            </div>
            <div>
                <CommentFormContainer postId={id} />
            </div>
        </div>
    );
}

Post.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    Comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired)
};

export default Post;