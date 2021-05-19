import React from 'react';
import author from "../jeff-image.jpeg"

const About = () => {

    return (

        <div className="container py-5" id="about">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <img src={author} alt="author..."/>
                </div>
                
                <div className="col-lg-6 col-xm-12">
                    <h1>About me</h1>
                    <p>Full stack software engineer with experience in Ruby on Rails, JavaScript, and React. </p>
                </div>
            </div>
            
        </div>
    )
}

export default About 