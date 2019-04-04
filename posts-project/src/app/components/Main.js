import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import PostPage from '../Posts/PostPage'
import Authors from '../components/Authors'
import About from './About'
import SinglePost from '../Posts/SinglePost'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/singlepost/:id" component={SinglePost}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/authors" component={Authors}></Route>
                <Route path="/" component={PostPage}></Route>
            </Switch>
        </main>
    )
}

export default Main