import React from 'react';
import './Card.scss';

function Card(props) {
    return (
        <div className="card" style={{height: props.height, width: props.width, display: props.display ? 'flex' : 'none'}}>
            {props.children}
        </div>
    )
}

export default Card;
