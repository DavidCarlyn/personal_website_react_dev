import React from 'react';

import { Link } from 'react-router-dom';

import './Home.css';

import SlackPaper from '../../resources/documents/slackcodechangenotification.pdf';
import AstrocytePaper from '../../resources/documents/astrocyteTechnicalPaper.pdf';

import Tile from '../../components/Tile/Tile.js';

function Home() {
    let GLARE = "https://github.com/dcarlyn/GLARE";
    return (
        <div className="Home">
            <div className="featured-project">
                <h2>Featured Project</h2>
                <Link to={GLARE} onClick={(event) => { event.preventDefault(); window.open(GLARE); }} target="_self"><Tile title="GLARE"></Tile></Link>
            </div>
            <div className="featured-paper">
                <h2>Featured Paper</h2>
                <Tile title="Pancreas Cancer Detection via Deep Learning (Coming Soon)"></Tile>
            </div>
        </div>
    )
}

export default Home;