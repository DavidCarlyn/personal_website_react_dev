import React from 'react';

import { Link } from 'react-router-dom';

import './Portfolio.css';

import Tile from '../../components/Tile/Tile.js';

function Portfolio() {
    return (
        <div className="Portfolio">
            <h2 className="project-title">Projects</h2>
            <div className="projects">
                <Tile title="Project1"></Tile>
                <Tile title="Project2"></Tile>
                <Tile title="Project3"></Tile>
            </div>
            <h2 className="paper-title">Papers</h2>
            <div className="papers">
                <Tile title="Paper1"></Tile>
                <Tile title="Paper2"></Tile>
                <Tile title="Paper3"></Tile>
            </div>
        </div>
    )
}

export default Portfolio;