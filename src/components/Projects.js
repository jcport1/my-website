import React from "react";
import pawpal from "../images/pawpals.png";
import french from "../images/frenchified.png"; 
import art from "../images/art-explorer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>

                <div className="image-box-wrapper row justify-content-center"> 
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={pawpal} alt="PawPal Ruby Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

               
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={french} alt="French Flashcards Javascript Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
            

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={art} alt="Art Explorer React Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects  