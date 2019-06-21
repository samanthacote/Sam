import React from 'react';

export const Item = (props) => {
    return(
        <div className="item">
            <img src={props.im} className="itemImage" alt="logo"/>
            <div className="title" onClick={props.handleClick}>{props.title}</div> 
            <strong>{props.price}</strong>
        </div>
    )
}