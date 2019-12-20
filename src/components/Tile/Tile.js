import React from 'react';

import './Tile.css';

function Tile(props) {
    return (
        <div className="Tile">
            <p>{props.title}</p>
        </div>
    );
}

export default Tile;