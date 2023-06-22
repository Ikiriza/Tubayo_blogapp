import React from 'react';
import './author.css';
import SideImage from '../images/img-5.jpg';
import Footer from '../Footer';
import TwitterIcon from '../images/twitter-logo.png';
import YoutubeIcon from '../images/youtube-logo.png';
import FacebookIcon from '../images/facebook-logo.jpg';
import InstagramIcon from '../images/instagram-logo.png';

const Author = () => {
  return (
    <div className="author-page">
      <div className="author-content-wrapper">
        <div className="author-side-image-card">
          <img src={SideImage} alt="Side Image" className="author-side-image" />
        </div>
        <div className="author-details">
          <h1 className="author-title">About John Smith</h1>
          <div className="author-bio-wrapper">
          <p className="author-bio">
          John Smith is a prolific writer specializing in historical fiction. 
          His novels transport readers to different eras, weaving captivating stories with rich historical details.
           Emma has received numerous literary awards for her work and is currently working on her next novel set in
            ancient Rome.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar tellus at quam convallis, vitae vulputate justo semper.
            Nullam fermentum, lorem eu interdum pellentesque, nisi erat
            suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
            nibh viverra, in vulputate nunc pellentesque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar tellus at quam convallis, vitae vulputate justo semper.
            Nullam fermentum, lorem eu interdum pellentesque, nisi erat
            suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
            nibh viverra, in vulputate nunc pellentesque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar tellus at quam convallis, vitae vulputate justo semper.
            Nullam fermentum, lorem eu interdum pellentesque, nisi erat
            suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
            nibh viverra, in vulputate nunc pellentesque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar tellus at quam convallis, vitae vulputate justo semper.
            Nullam fermentum, lorem eu interdum pellentesque, nisi erat
            suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
            nibh viverra, in vulputate nunc pellentesque.
         
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar tellus at quam convallis, vitae vulputate justo semper.
            Nullam fermentum, lorem eu interdum pellentesque, nisi erat
            suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
            nibh viverra, in vulputate nunc pellentesque.
            </p>
            <p className="author-bio2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar tellus at quam convallis, vitae vulputate justo semper.
            Nullam fermentum, lorem eu interdum pellentesque, nisi erat
            suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
            nibh viverra, in vulputate nunc pellentesque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar tellus at quam convallis, vitae vulputate justo semper.
            Nullam fermentum, lorem eu interdum pellentesque, nisi erat
            suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
            nibh viverra, in vulputate nunc pellentesque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar tellus at quam convallis, vitae vulputate justo semper.
            Nullam fermentum, lorem eu interdum pellentesque, nisi erat
            suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
            nibh viverra, in vulputate nunc pellentesque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pulvinar tellus at quam convallis, vitae vulputate justo semper.
            Nullam fermentum, lorem eu interdum pellentesque, nisi erat
            suscipit felis, vel dapibus quam lorem a mi. Sed luctus massa eu
            nibh viverra, in vulputate nunc pellentesque.
            
          </p>
          </div>
          <p className="author-nationality">
            Nationality: British
          </p>
          <p className="author-email">
            Email: johnsmith@gmail.com
          </p>
          <p className="author-website">
            Website: <a href="https://example.com">example.com</a>
          </p>
        <div className="social-icons">
          <p>Socials:</p>
          <button onClick={() => window.open("https://twitter.com/gensicollin")} className="social-icon">
        <img src={TwitterIcon} alt="Twitter" />
        </button>
          <button onClick={() => window.open("https://youtube.com/profile")} className="social-icon">
        <img src={YoutubeIcon} alt="Youtube" />
          </button>
           <button onClick={() => window.open("https://facebook.com/profile")} className="social-icon">
        <img src={FacebookIcon} alt="Facebook" />
         </button>
          <button onClick={() => window.open("https://instagram.com/profile")} className="social-icon">
        <img src={InstagramIcon} alt="Instagram" />
          </button>
    
     </div>
    </div>
   </div>
      <div className="author-footer">
        <Footer />
      </div>
    </div>
       
    
  );
}

export default Author;
