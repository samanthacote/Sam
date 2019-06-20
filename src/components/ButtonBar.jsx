import React from 'react';
import '../App.css';


export const ButtonBar = (props) => {
    return(
        <div>
        <button className='button' onClick={props.handleClassicalButtonClick}>
            Classical Ballet
        </button>
        <button className='button' onClick={props.handleNeoclassicalButtonClick}>
            Neoclassical Ballet
        </button>
        <button className='button' onClick={props.handleContemporaryButtonClick}>
            Contemporary Ballet
        </button>
        </div>
    )
}