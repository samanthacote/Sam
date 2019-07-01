import React from 'react';
import meshBack from '../../images/meshBack.png';
import longSleeve from '../../images/longSleeve.png';
import velvetRed from '../../images/velvetRed.png';
import {Item} from '../Item.jsx';

export const LeotardList = () => {
    return(
        <div className="list">
            <Item im={meshBack} title="Womens Compression Mesh Back Leotard" price="$37.05"/> 
            <Item im={longSleeve} title="Womens Inspired Back Cutout Long Sleeve Leotard" price="$41.18"/> 
            <Item im={velvetRed} title="Womens Burnout Velvet Camisole Leotard" price="$58.53"/>    
        </div>
    )
}