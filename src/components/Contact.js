import React from 'react';
import mail from "../images/mail.png";
import linkedin from "../images/linkedin.png";


const Contact = () => {

    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <h1 className="text-uppercase text-center py-5">Let's Get In Touch</h1>
                        <div className="align-items-center">
                            <div className="d-flex justify-content-center">
                             <div className="contact-info-wrapper row justify-content-center"> 
                                    <a href="mailto:jefferson.cuartas@gmail.com?subject=Reaching Out to Jeff" className="m-5"><img src={mail} style={{ width: '5em', margin:"auto"}} alt="Email Jeff..."></img></a>
                                    <a href="https://www.linkedin.com/in/jeff-cuartas/" className="m-5" target="_blank" rel="noreferrer"><img src={linkedin} style={{ width: '4em', margin:"auto"}} alt="Jeff's LinkedIn..."></img></a>
                            </div>
                        </div>
                     </div>
                </div>
             </div>
        </div>
        )
     }
                        
export default Contact  