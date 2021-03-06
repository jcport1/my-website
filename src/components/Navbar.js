import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import github from "../images/github.png"; 
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import resume from "../jeff-resume.pdf"

export default function Navbar(){

    return(

    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container-fluid">
        <a className="navbar-brand text-white logo" href="#">Jeff Cuartas</a>
        <div className="social-links d-inline-block">
        <a href="https://github.com/jcport1" target="_blank" rel="noreferrer"><img src={github} className="nav-icon" alt="github"></img></a>
        <a href="https://www.linkedin.com/in/jeff-cuartas/" target="_blank" rel="noreferrer"><img src={linkedin} className="nav-icon" alt="linkedin"></img></a>
        <a href="https://twitter.com/jeff_the_coder" target="_blank" rel="noreferrer"><img src={twitter} className="nav-icon" alt="twitter"></img></a>
        
        
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
            <Link smooth={true} to="about" offset={-110} className="nav-link" aria-current="page" href="#">About</Link>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="projects" offset={-110} className="nav-link" href="#">Projects</Link>
            </li>
             <li className="nav-item">
            <a href={resume} target="_blank" className="nav-link" rel="noreferrer">Resume</a>
            </li>
            <li className="nav-item">
            <Link smooth={true} to="blog" offset={-110} className="nav-link" href="#">Blog</Link>
            </li>
             <li className="nav-item">
            <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
            </li>
      </ul>
    </div>
  </div>

</nav>

        
    )
}

