import React from 'react';
import '../App.css';

export const RemoveButton = (props) => {
    return(
        <button className='button' onClick={props.handleRemoveClick}> Remove Added Info </button>
    )
}