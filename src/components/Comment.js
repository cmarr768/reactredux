import React from 'react';
import PropTypes from 'prop-types';

//List item objects displaying the author and text entered of the comment.
const Comment = ({ author, text }) => (
  <div className="card green lighten-2">
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