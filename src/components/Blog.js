import React from 'react';
import BlogCarousel from "./BlogCarousel";


const Blog = () => {
    return (
        <div id="blog" className="blog-posts">
           <h1>Blog Posts</h1>
           <div className="container">
               <div className="blog-content">
               <BlogCarousel/>
               </div>
           </div>
            
        </div>
    )
}

export default Blog  