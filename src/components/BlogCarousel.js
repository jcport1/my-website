import React from 'react'; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import post1 from "../images/blog-post-1.png";
import post2 from "../images/blog-post-2.png"; 
import post3 from "../images/blog-post-3.png"; 

const BlogCarousel = () => {
    return (
       <Carousel
       showArrows={true}
       infiniteLoop={true}
       showThumbs={false}
       showStatus={false}
       autoPlay={true}
       interval={3000}>
       <>
       <img src={post1} alt="JavaScript Scope Chain"/>
       <div className="myCarousel">
       <h3>Understanding the JavaScript Scope Chain</h3>
       </div>
       </>
       <>
       <img src={post2} alt="JavaScript Scope Chain"/>
       <div className="myCarousel">
       <h3>Making API Calls with RestClient</h3>
       </div>
       </>
       
       <>
       <img src={post3} alt="JavaScript Scope Chain"/>
       <div className="myCarousel">
       <h3>Best Browsers to Use for JavaScript</h3>
       </div>
       </>
       
       </Carousel>
            

    )
}

export default BlogCarousel  
