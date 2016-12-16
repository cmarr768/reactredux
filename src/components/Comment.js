import React, { PropTypes } from 'react';

//List item objects displaying the author and text entered of the comment.
const Comment = ({ author, text }) => (
  <div className="card blue-grey darken-1">
    <div className="card-content white-text">
      <span className="card-title">{author}</span>
      <p>{text}</p>
    </div>
  </div>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;