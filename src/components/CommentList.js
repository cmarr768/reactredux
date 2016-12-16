import React, { PropTypes } from 'react';
import Comment from './Comment';

//An unordered list of comments.
const CommentList = ({ Comments }) => (
    <div className="col m4 l4 s6">
            {Comments.map(comment =>
                <Comment
                    key={comment.id}
                    {...comment}
                    />
            )}
    </div>
);

CommentList.propTypes = {
    Comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default CommentList;