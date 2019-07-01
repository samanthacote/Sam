import React from 'react';
import flatSlippers from '../images/blochFlat.png';
import blochPointe from '../images/blochPointe.png';
import grishkoPointe from '../images/grishkoPointe.png';
import {Item} from './Item.jsx';

export const ShoeList = (props) => {
    return(
        <div className="list">
            <Item im={flatSlippers} title="Bloch Womens Performa Stretch Canvas Ballet Shoes" price="$16.92"/> 
            <Item im={blochPointe} title="Bloch Adult Balance European Pointe Shoes" price="$80.05"/> 
            <Item im={grishkoPointe} title="Grishko Adult Triumph Pointe Shoes" price="$79.46"/>    
        </div>
    )
}