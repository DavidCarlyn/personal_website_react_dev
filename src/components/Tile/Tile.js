import React from 'react';

import './Tile.css';

function Tile(props) {
    return (
        <div className="Tile">
            {props.title}
        </div>
    );
}

export default Tile;