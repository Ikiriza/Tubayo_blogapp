import React from 'react';
import './post.css';
import SideImage from '../images/img-3.jpg';

const Post = () => {
  return (
    <div className="post-page">
      <div className="post-content-wrapper">
        <div className="post-side-image-card">
          <img src={SideImage} alt="Side Image" className="post-side-image" />
        </div>
        <div className="post-details">
          <h1 className="post-title">Exploring the Grand Canyon</h1>
          <p className="post-author">
            Author: <a href="https://example.com">John Smith</a>
          </p>
          <p className="post-date">Date: June 15, 2023</p>
          <div className="post-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pulvinar tellus at quam convallis, vitae vulputate justo semper.
              Nullam fermentum, lorem eu interdum pellentesque, nisi erat
              suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
              nibh viverra, in vulputate nunc pellentesque.
            </p>
          </div>
          <div className="post-tags">
            <span className="tag">#travel</span>
            <span className="tag">#nature</span>
            <span className="tag">#adventure</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
