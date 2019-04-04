
import React, { Component } from 'react';
import { fetchAuthor } from '../services/fetchAuthor'

class SingleAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: ""
        }
    }
    //     authorFetch() {
    //         fetchAuthor().then((user) => {
    //                 this.setState({
    //                     user: user.id
    //                 })
    //             }

    // }

    render() {
        return (
            <>
                <h3>This is author page</h3>
            </>
        )
    }
}

export default SingleAuthor