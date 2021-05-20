import React from "react";
import pawpal from "../images/pawpals.png";
import french from "../images/frenchified.png"; 
import art from "../images/art-explorer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {

    const openPopupboxPawpal = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={pawpal} alt="PawPal Ruby Project..."/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <b>Github: </b><a className="hyper-link" onClick={() => window.open("https://github.com/jcport1/doggy-hangouts")}>https://github.com/jcport1/doggy-hangouts</a>
            </>
        )
          
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "PawPal Ruby Project",
                },
            },
        })
    }

    const popupboxConfigPawpal = {
        titleBar: {
          enable: true,
          text: "PawPal Ruby Project"  
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // JS Project

    const openPopupboxFrench = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={french} alt="French Flashcards JS Project..."/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <b>Github: </b><a className="hyper-link" onClick={() => window.open("https://github.com/jcport1/js-project-french-app-frontend")}>https://github.com/jcport1/js-project-french-app-frontend</a>
            </>
        )
          
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "French Flashcards Javascript Project",
                },
            },
        })
    }

    const popupboxConfigFrench = {
        
        titleBar: {
          enable: true,
          text: "French Flashcards Javascript Project" 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //art explorer 

    const openPopupboxArt = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={art} alt="Art Explorer React Project..."/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <b>Github: </b><a className="hyper-link" onClick={() => window.open("https://github.com/jcport1/react-frontend")}>https://github.com/jcport1/react-frontend</a>
            </>
        )
          
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Art Explorer React Project",
                },
            },
        })
    }

    const popupboxConfigArt = {
        titleBar: {
          enable: true,
          text: "Art Explorer React Project"  
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>

                <div className="image-box-wrapper row justify-content-center"> 
                    <div className="portfolio-image-box" onClick={openPopupboxPawpal}>
                        <img className="portfolio-image" src={pawpal} alt="PawPal Ruby Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

               
                    <div className="portfolio-image-box" onClick={openPopupboxFrench}>
                        <img className="portfolio-image" src={french} alt="French Flashcards Javascript Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
            

                    <div className="portfolio-image-box" onClick={openPopupboxArt}>
                        <img className="portfolio-image" src={art} alt="Art Explorer React Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer { ...popupboxConfigPawpal }/>
            <PopupboxContainer { ...popupboxConfigFrench }/>
            <PopupboxContainer { ...popupboxConfigArt }/>
        </div>
    )
}

export default Projects  