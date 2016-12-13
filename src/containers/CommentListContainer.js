import { connect } from 'react-redux';
import CommentList from '../components/CommentList';

//Comments is referring to the state object Comments which we create in reducers/Comments.
const getCommentListContainer = (Comments) => {
    return Comments;
};

const mapStateToProps = (state) => {
    return {
        Comments: getCommentListContainer(state.Comments)
    }
};

const CommentListContainer = connect(
    mapStateToProps
)(CommentList);

export default CommentListContainer;