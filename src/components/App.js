import React from 'react';
import CommentFormContainer from '../containers/CommentFormContainer';
import PostFormContainer from '../containers/PostFormContainer';
import PostsContainer from '../containers/PostsContainer';
import UserSelectContainer from '../containers/UserSelectContainer';

//The entry point of react code.
const App = () => (
    <div>
        <div className="clearfix">
            <PostFormContainer />
        </div>
        <div className="clearfix">
            <PostsContainer />
        </div>
    </div>
)

export default App;