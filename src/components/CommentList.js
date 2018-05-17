import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

//An unordered list of comments.
const CommentList = ({ Comments }) => (
    <div>
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