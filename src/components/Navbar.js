import React from 'react';
// import { Link } from 'react-scroll';

export default function Navbar(){

    return(

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
            </li>
             <li className="nav-item">
            <a className="nav-link" href="#">Resume</a>
            </li>
             <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
            </li>
      </ul>
    </div>
  </div>

</nav>

        
    )
}

