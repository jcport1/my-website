import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar(){

    return(

        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            
            </Nav>
        
        </Navbar>
    )
}