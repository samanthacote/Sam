import React from 'react';

export const HomeButton = (props) => {
    return(
        <div>
        <button className='button' onClick={props.handleClick}> Home </button>
        </div>
    )
}