import React from 'react';
import { Link } from 'react-router-dom';

export const HomeButton = () => {
    return(
        <div>
        <button className='button'> 
            <Link to="/"> Home </Link>
        </button>
        </div>
    )
}