import React from 'react';
import author from "../jeff-image.jpg"

const About = () => {

    return (

        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..."/>
                     </div>
                </div>
                
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>Full stack software engineer with experience in Ruby on Rails, JavaScript, and React. I'm a driven problem-solver with an innate desire to always keep learning. </p>
                    <p>In my spare time, I enjoy hiking, conversing with fellow franchophones, and listening to NPR while I try out a new recipe.</p>
    
                </div>
            </div>
            
        </div>
    )
}

export default About 