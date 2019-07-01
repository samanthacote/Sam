import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBar = () => {
    return(
            <div>
                <button className="button">
                    <Link to="/shoes/"> Ballet Shoes </Link>
                </button>
                <button className="button">
                    <Link to="/leotards/"> Leotards </Link>
                </button>
                <button className="button">
                    <Link to="/costumes/"> Costumes </Link>
                </button>
            </div>
    )
}