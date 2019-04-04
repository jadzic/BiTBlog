import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchAuthor } from '../services/fetchAuthor'
import { fetchSinglePost } from '../services/fetchPosts'

class SinglePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            addres: "adresa",
            author: {}
        }
    }

    componentDidMount() {
        this.resolveSinglePost()
    }

    resolveSinglePost() {
        fetchSinglePost(this.props)
            .then((post) => {
                this.setState({
                    post: post
                })
                fetchAuthor(post.userId)
                    .then((user) => {
                        this.setState({
                            author: user
                        })
                    })
            })

    }

    render() {
        return (
            <>

                <div >
                    <Link to="/">Back</Link>
                    <h2>{this.state.post.title}</h2>

                    <h4 className="singlePost"><Link to={`/singleauthor/${this.state.author.id}`}>{this.state.author.name}</Link></h4>
                    <p>{this.state.post.body}</p>
                </div>
            </>
        );
    }
}
export default SinglePost
