import React from 'react';
import { Link } from 'react-router-dom'

const PostList = (props) => {

    return (
        props.posts.map(post => {
            return (
                <div className="postItem" key={post.id}>
                    <h3><Link to={`/singlepost/${post.id}`}>{post.id}. {post.title}</Link></h3>
                    <p>{post.body}</p>
                </div>
            )
        })
    )
}

export default PostList