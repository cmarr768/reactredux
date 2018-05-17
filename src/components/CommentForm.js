import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({onClick, postId}) => {
    let author;
    let text;
    return (
        <div className="card-panel blue lighten-5" style={{marginLeft: 20 + 'px'}}>
            <div className="card-content black-text">Add a new comment</div>
            <div className="input-field">
                <input placeholder="name" ref={node => {
                    author = node
                } } />
                <input placeholder="comment" ref={node => {
                    text = node
                } } />
                <div className="right-align">
                    <input type="button" value="Submit Comment" className="btn waves-effect waves-light" onClick={e => {
                        e.preventDefault()
                        onClick(postId, author.value, text.value);
                    } } >
                    </input>
                </div>
            </div>
        </div>
    );
};

CommentForm.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default CommentForm;