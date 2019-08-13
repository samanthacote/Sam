import React from 'react';
import { Link } from 'react-router-dom';

export const Item = (props) => {
    return(
        <div className="item">
            
            <img src={props.im} className="itemImage" alt="item"/>
            <Link to={{
                pathname: `/${props.product}/${props.id}/`,
                state: {
                    title: props.title,
                    price: props.price,
                    im: props.im,
                } 
            }}>
            <div className="title">{props.title}</div> 
            </Link>
            <b>{props.price}</b>
        </div>
    )
}