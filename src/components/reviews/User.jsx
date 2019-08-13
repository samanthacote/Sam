import React from 'react';

export const User = (props) => {
    return(
        <div className="user">
            <img src={props.im} className="user-image" alt="User"/>
            <span className="userName">{props.username}</span>
        </div>
    )
}