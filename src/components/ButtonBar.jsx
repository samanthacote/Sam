import React from 'react';
import '../App.css';


export const ButtonBar = (props) => {
    return(
        <div>
        <button className='button' onClick={props.handleClassicalButtonClick}>
            Ballet Shoes
        </button>
        <button className='button' onClick={props.handleNeoclassicalButtonClick}>
            Leotards
        </button>
        <button className='button' onClick={props.handleContemporaryButtonClick}>
            Costumes
        </button>
        </div>
    )
}