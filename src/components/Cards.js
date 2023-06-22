import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image1 from './images/group photo.jpg'
import Image2 from './images/photo_2023-04-15_20-03-56.jpg'
import Image3 from './images/image1.jpeg'
import Image4 from './images/background.jpeg'
import Image5 from './images/header.webp'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these dope Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Image1}
              text='Explore the hidden treasures of Uganda'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={Image2}
              text='Come experience first hand the Tubayo market experiences '
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Image3}
              text='Travel Kampala at night '
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={Image4}
              text='Reach the highest of mountains '
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={Image5}
              text='Make new memories '
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
