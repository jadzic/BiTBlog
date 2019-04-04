import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="row">
            <h2 className="col-8">BIT BLOG</h2>
            <ul className="col-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </header>
    )
}

export default Header