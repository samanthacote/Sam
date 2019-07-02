import React from 'react';
import {Item} from '../Item.jsx';
import {costumes} from './data.js';

export const CostumeList = () => {
    return(
        <div>
            {costumes.map((item, index) => (
                <Item key={index} im={item.im} title={item.title} price={item.price}/>
            ))}
        </div>    
    )
}