import React, { PropTypes } from 'react';

let author;
let text;
const PostForm = ({onClick}) =>
    (
        <div className="col m4 l4 s6">
            <div className="card-panel red darken-1 z-depth-4">
            <div className="card-content white-text">Add a new post</div>
                <div className="input-field">
                    <input placeholder="name" ref={node => {
                        author = node
                    } } />
                    <input placeholder="post" ref={node => {
                        text = node
                    } } />
                    <div className="right-align">
                        <input type="button" value="Submit Post" className="btn waves-effect waves-light" onClick={e => {
                            e.preventDefault()
                            onClick(author.value, text.value);
                        } } >
                        </input>
                    </div>
                </div>
            </div>
        </div>
    );

PostForm.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default PostForm;