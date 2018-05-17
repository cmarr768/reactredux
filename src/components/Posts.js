import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

//An unordered list of comments.
const Posts = ({ Posts, Comments }) => {
    return (
        <div className="col m4 l4 s6">
            {Posts.map(post => {
                var comments = Comments.filter((item)=>{return item.postId == post.id});
                return (
                    <Post
                        key={post.id}
                        {...post}
                        Comments={comments}
                        />);
            }
            )}
        </div>
    );
};

Posts.propTypes = {
    Posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    Comments: PropTypes.array
};

export default Posts;