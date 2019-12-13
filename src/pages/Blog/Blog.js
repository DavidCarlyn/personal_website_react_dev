import React from 'react';

import { Link } from 'react-router-dom';

import './Blog.css';

function Blog() {
    return (
        <div className="Blog">
            <Link to="Blog/1" className="post-item">PostImage</Link>
            <Link to="Blog/2" className="post-item">PostImage</Link>
            <Link to="Blog/3" className="post-item">PostImage</Link>
            <Link to="Blog/4" className="post-item">PostImage</Link>
            <Link to="Blog/5" className="post-item">PostImage</Link>
            <Link to="Blog/6" className="post-item">PostImage</Link>
            <Link to="Blog/7" className="post-item">PostImage</Link>
            <Link to="Blog/8" className="post-item">PostImage</Link>
            <Link to="Blog/9" className="post-item">PostImage</Link>
        </div>
    )
}

export default Blog;