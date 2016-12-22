import { combineReducers } from 'redux';
import Comments from './Comments';
import Posts from './Posts';

const CommentApp = combineReducers({
    Comments,
    Posts
});

export default CommentApp;