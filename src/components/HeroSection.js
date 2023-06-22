import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Image1 from './images/background.jpg'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src={Image1}/>
      <h1>Travel.Experience.Live</h1>
      <p>Explore the globe with Tubayo</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       {/* <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         WATCH TRAILER <i className='far fa-play-circle' />
  </Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;
