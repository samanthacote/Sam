import React from 'react';

export const Item = (props) => {
    return(
        <div className="item">
            <img src={props.im} className="itemImage" alt="item"/>
            <div className="title">{props.title}</div> 
            <b>{props.price}</b>
        </div>
    )
}