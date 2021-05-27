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
       <a className="hyper-link-blog" onClick={() => window.open("https://jefferson-cuartas.medium.com/understanding-javascript-variables-the-scope-chain-26d4a5793214")}><b>Understanding JavaScript Variables & The Scope Chain</b></a>
       </div>
       </>
       <>
       <img src={post2} alt="RestClient"/>
       <div className="myCarousel">
       <a className="hyper-link-blog" onClick={() => window.open("https://jefferson-cuartas.medium.com/rails-backend-how-to-fetch-data-from-a-third-party-api-via-restclient-c6968e70d6f5")}><b>Rails Backend: How to Fetch Data From a Thid-Party API via RestClient</b></a>
       </div>
       </>
       
       <>
       <img src={post3} alt="Browsers fro Developers"/>
       <div className="myCarousel">
       <a className="hyper-link-blog" onClick={() => window.open("https://jefferson-cuartas.medium.com/best-browsers-to-use-for-javascript-9cadbfc5dac")}><b>Best Browsers to Use For JavaScript Web Development</b></a>
       </div>
       </>
       
       </Carousel>
            

    )
}

export default BlogCarousel  
