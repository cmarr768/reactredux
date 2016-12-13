import React, { PropTypes } from 'react';
import Comment from './Comment';

//An unordered list of comments.
const CommentList = ({ Comments }) => (
    <div className="col-md-4 col-lg-4 col-sm-6">
        <ul className="list-group">
            {Comments.map(comment =>
                <Comment
                    key={comment.id}
                    {...comment}
                    />
            )}
        </ul>
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