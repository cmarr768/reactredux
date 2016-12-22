import { connect } from 'react-redux';
import Posts from '../components/Posts';

//Posts is referring to the state object Posts which we create in reducers/Posts.
const getPosts = (Posts) => {
    return Posts;
};

const getComments = (Comments) => {
    return Comments;
};

const mapStateToProps = (state) => {
    return {
        Posts: getPosts(state.Posts),
        Comments: getComments(state.Comments)
    }
};

const PostsContainer = connect(
    mapStateToProps
)(Posts);

export default PostsContainer;