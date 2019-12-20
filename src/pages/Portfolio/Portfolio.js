import React from 'react';
import { Link } from 'react-router-dom';

import './Portfolio.css';

import SlackPaper from '../../resources/documents/slackcodechangenotification.pdf';
import AstrocytePaper from '../../resources/documents/astrocyteTechnicalPaper.pdf';

import Tile from '../../components/Tile/Tile.js';

function Portfolio() {
    let GLARE = "https://github.com/dcarlyn/GLARE";
    return (
        <div className="Portfolio">
            <h2 className="project-title">Projects</h2>
            <div className="projects">
                <Link to={SlackPaper} onClick={(event) => { event.preventDefault(); window.open(SlackPaper); }} target="_self"><Tile title="Code Change Notification"></Tile></Link>
                <Link to={AstrocytePaper} onClick={(event) => { event.preventDefault(); window.open(AstrocytePaper); }} target="_self"><Tile title="Astrocyte Segmentation"></Tile></Link>
                <Link to={GLARE} onClick={(event) => { event.preventDefault(); window.open(GLARE); }} target="_self"><Tile title="GLARE"></Tile></Link>
            </div>
            <h2 className="paper-title">Papers</h2>
            <div className="papers">
                <Tile title="GLARE (Coming Soon)"></Tile>
                <Tile title="Pancreas Cancer Detection via Deep Learning (Coming Soon)"></Tile>
            </div>
        </div>
    )
}

export default Portfolio;