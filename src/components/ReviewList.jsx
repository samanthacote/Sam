import React from 'react';
import {Review} from './Review.jsx';

export const ReviewList = (props) => {
    return(
        <div>
            {props.items.map((item, index) => (
                <Review key={index} text={item.text}/>
            ))}
        </div>
    )
}