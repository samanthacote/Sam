import React from 'react';

export const RemoveButton = (props) => {
    return(
        <button className='button' onClick={props.handleRemoveClick}> Remove Added Info </button>
    )
}