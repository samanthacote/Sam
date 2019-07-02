import React from 'react';
// import {shoes, leotards, costumes} from '../data/data.js';

export const LargeItemView = ({ match }) => {
    console.log(match.params.id);
    console.log(match.params.item);
    return(
        <div className="large-display">
            <img src={match.params.id[match.params.item].im} className="large-display-image" alt="item"/>
            <div className="title">{match.params.id[match.params.item].title}</div> 
            <b>{match.params.id[match.params.item].price}</b>
        </div>
    )
}
