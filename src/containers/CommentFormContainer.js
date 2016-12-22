import React from 'react';
import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import AddComment from '../actions/AddComment';

const mapDispatchToProps = (dispatch) => {
    return{
        onClick:(postId, author, text)=>{
            console.log('before add comment');
            console.log('author: ' + author);
            console.log('text: ' + text);
            dispatch(AddComment(postId, author, text));
            console.log('after add comment');
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId
    }
};

const CommentFormContainer = connect(
    mapStateToProps,//This represents mapStateToProps which we are not using here.
    mapDispatchToProps
)(CommentForm);

export default CommentFormContainer;