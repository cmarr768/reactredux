import React, { PropTypes } from 'react';

let author;
let text;
const CommentForm = ({onClick}) =>
    (
        <div className="col m4 l4 s6">
            <div className="card-panel teal">
                <div className="input-field">
                    <input placeholder="name" ref={node => {
                        author = node
                    } } />
                    <input placeholder="comment" ref={node => {
                        text = node
                    } } />
                    <input type="button" value="Post" className="btn waves-effect waves-light" onClick={e => {
                        e.preventDefault()
                        onClick(author.value, text.value);
                    } } >
                    </input>
                </div>
            </div>
        </div>
    );

CommentForm.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default CommentForm;