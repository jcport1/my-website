import React from 'react';
import author from "../jeff-image.jpg"
import resume from "../jeff-resume.pdf"

const About = () => {

    return (

        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..."/>
                     </div>
                </div>
                
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>Full stack software engineer with experience in Ruby on Rails, JavaScript, and React. </p>
                    <a href={resume} target="_blank" rel="noreferrer">
                    <button className="bt btn-info">Here's my resume</button>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default About 