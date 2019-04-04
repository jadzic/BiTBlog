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


    // <>
    // <h2>Posts</h2>
    // <div className="postItem">
    //     <h3>Title 1</h3>
    //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti obcaecati harum assumenda nostrum molestiae. Pariatur modi assumenda voluptate, expedita repellat soluta est. Vitae beatae cumque nulla totam, incidunt quod!</p>
    // </div>
    // <div className="postItem">
    //     <h3>Title 2</h3>
    //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti obcaecati harum assumenda nostrum molestiae. Pariatur modi assumenda voluptate, expedita repellat soluta est. Vitae beatae cumque nulla totam, incidunt quod!</p>
    // </div>
    // <div className="postItem">
    //     <h3>Title 3</h3>
    //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti obcaecati harum assumenda nostrum molestiae. Pariatur modi assumenda voluptate, expedita repellat soluta est. Vitae beatae cumque nulla totam, incidunt quod!</p>
    // </div>
    // <div className="postItem">
    //     <h3>Title 4</h3>
    //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti obcaecati harum assumenda nostrum molestiae. Pariatur modi assumenda voluptate, expedita repellat soluta est. Vitae beatae cumque nulla totam, incidunt quod!</p>
    // </div>
    //     </>