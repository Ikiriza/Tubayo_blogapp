import React from "react";
import './about.css';
import Image2 from '../images/group photo.jpg'




const Article = () => {
  return (

    <div className='about'>
        <h1> Tubayo </h1>
        <h3>About us ...</h3>
        <img className='picture' src={Image2} alt=""/>        
    </div>
    );
  }
 export default Article;