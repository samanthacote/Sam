import React from 'react';
import {Item} from '../Item.jsx';
import {shoes} from './data.js';

export const ShoeList = () => {
    return(
        <div>
            {shoes.map((item, index) => (
                <Item im={item.im} title={item.title} price={item.price}/>
            ))}
        </div>    
    )
}