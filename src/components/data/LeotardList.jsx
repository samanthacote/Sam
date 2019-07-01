import React from 'react';
import {Item} from '../Item.jsx';
import {leotards} from './data.js';

export const LeotardList = () => {
    return(
        <div>
            {leotards.map((item, index) => (
                <Item im={item.im} title={item.title} price={item.price}/>
            ))}
        </div>    
    )
}