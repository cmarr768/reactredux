import React from 'react';
import { connect } from 'react-redux';
import PostForm from '../components/PostForm';
import AddPost from '../actions/AddPost';

const mapStateToProps = (state) => {
    return {
        SelectPostUser: state.SelectPostUser
    }
};

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
    mapStateToProps,//This represents mapStateToProps which we are not using here.
    mapDispatchToProps
)(PostForm);

export default PostFormContainer;