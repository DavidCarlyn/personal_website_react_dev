import React from 'react';

import { Link } from 'react-router-dom';

import './Blog.css';

import Tile from '../../components/Tile/Tile.js';

function Blog() {
    return (
        <div className="Blog">
            <Link className="link-post" to="Blog/1"><Tile title="Blog 1"></Tile></Link>
            <Link className="link-post" to="Blog/2"><Tile title="Blog 2"></Tile></Link>
            <Link className="link-post" to="Blog/3"><Tile title="Blog 3"></Tile></Link>
            <Link className="link-post" to="Blog/4"><Tile title="Blog 4"></Tile></Link>
            <Link className="link-post" to="Blog/5"><Tile title="Blog 5"></Tile></Link>
            <Link className="link-post" to="Blog/6"><Tile title="Blog 6"></Tile></Link>
            <Link className="link-post" to="Blog/7"><Tile title="Blog 7"></Tile></Link>
            <Link className="link-post" to="Blog/8"><Tile title="Blog 8"></Tile></Link>
            <Link className="link-post" to="Blog/9"><Tile title="Blog 9"></Tile></Link>
        </div>
    )
}

export default Blog;