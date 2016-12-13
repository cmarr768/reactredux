import React from 'react';
import CommentFormContainer from '../containers/CommentFormContainer';
import CommentListContainer from '../containers/CommentListContainer';

//The entry point of react code.
const App = () => (
    <div>
        <div className="clearfix">
            <CommentFormContainer />
        </div>
        <div className="clearfix">
            <CommentListContainer />
        </div>
    </div>
)

export default App;