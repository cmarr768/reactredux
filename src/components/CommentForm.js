import React, { PropTypes } from 'react';

let author;
let text;
const CommentForm = ({onClick}) =>
    (
        <div className="col-md-4 col-lg-4 col-sm-6">
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="form-group">
                        <input className="form-control" placeholder="name" ref={node => {
                            author = node
                        } } />
                        <input className="form-control" placeholder="comment" ref={node => {
                            text = node
                        } } />
                        <input type="button" value="Post" className="btn btn-success" onClick={e => {
                            e.preventDefault()
                            onClick(author.value, text.value);
                        } } />
                    </div>
                </div>
            </div>
        </div>
    );

CommentForm.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default CommentForm;