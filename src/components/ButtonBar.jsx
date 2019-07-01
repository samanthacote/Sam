import React from 'react';
import '../App.css';


export const ButtonBar = (props) => {
    return(
        <div>
        <button className='button' onClick={props.handleShoesButtonClick}>
            Ballet Shoes
        </button>
        <button className='button' onClick={props.handleLeoButtonClick}>
            Leotards
        </button>
        <button className='button' onClick={props.handleCostumesButtonClick}>
            Costumes
        </button>
        </div>
    )
}