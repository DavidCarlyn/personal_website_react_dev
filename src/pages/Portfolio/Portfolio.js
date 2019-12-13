import React from 'react';

import { Link } from 'react-router-dom';

import './Portfolio.css';

function Portfolio() {
    return (
        <div className="Portfolio">
            <div className="projects">Projects</div>
            <div className="papers"><a href={process.env.PUBLIC_URL + '/resources/documents/slackcodechangenotification.pdf'}>Papers</a></div>
        </div>
    )
}

export default Portfolio;