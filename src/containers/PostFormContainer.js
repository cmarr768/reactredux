import React from 'react';
import { connect } from 'react-redux';
import PostForm from '../components/PostForm';
import AddPost from '../actions/AddPost';

const mapDispatchToProps = (dispatch) => {
    return{
        onClick:( author, text)=>{
            console.log('before add post');
            console.log('author: ' + author);
            console.log('text: ' + text);
            dispatch(AddPost(author, text));
            console.log('after add comment');
        }
    }
};

const PostFormContainer = connect(
    null,//This represents mapStateToProps which we are not using here.
    mapDispatchToProps
)(PostForm);

export default PostFormContainer;