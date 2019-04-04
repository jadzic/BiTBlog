import React, { Component } from 'react';
import PostList from '../Posts/PostList';
import { fetchPosts } from "../services/fetchPosts"

class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        fetchPosts().then((p) => {
            this.setState({
                posts: p
            })
        })

    }


    render() {
        return (
            <>
                <PostList posts={this.state.posts}></PostList>
            </>
        );
    }
}

export default PostPage;
