import React from 'react';
import {shoes, leotards, costumes} from '../data/data.js';

export const LargeItemView = ({ match }) => {
    console.log(match.params.item);

    return(
        <div className="item">
            <img src={shoes[match.params.item].im} className="itemImage" alt="item"/>
            <div className="title">{shoes[match.params.item].title}</div> 
            <b>{shoes[match.params.item].price}</b>
        </div>
    )
}
