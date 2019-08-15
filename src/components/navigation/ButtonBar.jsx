import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export const ButtonBar = () => {
    return(
        // <div>
        //     <button className="button">
        //         <Link to="/shoes/"> Ballet Shoes </Link>
        //     </button>
        //     <button className="button">
        //         <Link to="/leotards/"> Leotards </Link>
        //     </button>
        //     <button className="button">
        //         <Link to="/costumes/"> Costumes </Link>
        //     </button>
        // </div>

        <Navbar fixed="top" bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand>Dancewear</Navbar.Brand>
            </Link>
            <Nav>
                <Nav.Link>
                    <Link className='link' style={{ color: 'white' }} to="/shoes/"> Ballet Shoes </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={{ color: 'white' }} to="/leotards/"> Leotards </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={{ color: 'white' }} to="/costumes/"> Costumes </Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}