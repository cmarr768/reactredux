import React, { PropTypes } from 'react';

//List item objects displaying the author and text entered of the comment.
const Comment = ({ author, text }) => (
  <li className="list-group-item">
    <h3>{author}</h3>
    {text}
  </li>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;