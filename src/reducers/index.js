import { combineReducers } from 'redux';
import Comments from './Comments';
import Posts from './Posts';
import Users from './Users';
import SelectPostUser from './SelectPostUser';

const CommentApp = combineReducers({
    Comments,
    Posts,
    Users,
    SelectPostUser
});

export default CommentApp;