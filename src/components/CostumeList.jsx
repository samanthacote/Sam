import React from 'react';
import whiteTulle from '../images/whiteTulle.png';
import redTutu from '../images/redTutu.png';
import lilacTutu from '../images/lilacTutu.png';
import {Item} from './Item.jsx';

export const CostumeList = () => {
    return(
        <div className="list">
            <Item im={whiteTulle} title="Adult 24-inch Juliet Skirt Soft Tulle" price="$25.42"/> 
            <Item im={redTutu} title="Womens 7-Layer Ballet Tutu Skirt" price="$77.22"/> 
            <Item im={lilacTutu} title="Adult Professional 6-Layer Platter Tutu" price="$124.86"/>    
        </div>
    )
}