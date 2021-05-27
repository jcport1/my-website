import React from 'react';
import Typed from "react-typed";

const Header = () => {

    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Full-Stack Developer</h1>
                <Typed
                    className="typed-text"
                    strings={["Ruby", "JavaScript", "HTML 5", "CSS 3", "React.JS", "Ruby on Rails", "SQLite3", "OAuth 2.0"]}
                    typeSpeed={40}
                    backspeed={50}
                    loop
            
                />
            </div>
        </div>
    )
}

export default Header  