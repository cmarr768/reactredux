import React from 'react';
import UserSelectContainer from '../containers/UserSelectContainer';
import PropTypes from 'prop-types';

let text;
const PostForm = ({SelectPostUser, onClick}) =>
    (
        <div className="col m4 l4 s6">
            <div className="card-panel red darken-1 z-depth-4">
            <div className="card-content white-text">Add a new post</div>
                <div className="input-field">
                    <UserSelectContainer />
                    <input placeholder="post" ref={node => {
                        text = node
                    } } />
                    <div className="right-align">
                        <input type="button" value="Submit Post" className="btn waves-effect waves-light" onClick={e => {
                            e.preventDefault()
                            onClick(SelectPostUser.name, text.value);
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