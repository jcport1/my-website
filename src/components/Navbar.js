import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar(){

    return(

        <div>
         <Link to="contact" smooth={true} durtation={1000}>Contact</Link>
         <Link to="projects" smooth={true} durtation={1000}>Projects</Link>
         <Link to="resume" smooth={true} durtation={1000}>Resume</Link>

        </div>
    )
}