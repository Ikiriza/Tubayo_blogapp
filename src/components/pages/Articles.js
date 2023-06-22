import React from 'react';
import './article.css';
import Image1 from '../images/img-3.jpg'
import CardItem from '../CardItem';
import Footer from '../Footer';


const Article = () => {
  return (
    <>
    <div className='article-container'>
      <h1 className='article-title'>Travelling to Mars</h1>
      <h3 className= 'article-title1'> Lets take you for a ride...</h3>
      <div className='article-content'>
        <CardItem
        className='column'
        src={Image1}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at augue lectus. Vestibulum congue dui at elit tempor, ut tempor felis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et elit est.
         Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        label= 'Adventure'
        path= './post.js'
        />
        <CardItem
        className='column'
        src={Image1}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at augue lectus. Vestibulum congue dui at elit tempor, ut tempor felis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et elit est.
         Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        label= 'Adventure'
        path= './post.js'
        />
        <CardItem
        className='column'
        src={Image1}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at augue lectus. Vestibulum congue dui at elit tempor, ut tempor felis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et elit est.
         Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        label= 'Adventure'
        path= './post.js'
        />
        <CardItem
        className='column'
        src={Image1}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at augue lectus. Vestibulum congue dui at elit tempor, ut tempor felis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et elit est.
         Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        label= 'Adventure'
        path= './post.js'
        />
        <CardItem
        className='column'
        src={Image1}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at augue lectus. Vestibulum congue dui at elit tempor, ut tempor felis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et elit est.
         Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        label= 'Adventure'
        path= './post.js'
        />
        <CardItem
        className='column'
        src={Image1}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at augue lectus. Vestibulum congue dui at elit tempor, ut tempor felis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et elit est.
         Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        label= 'Adventure'
        path= './services/post.js'
        />
        <CardItem
        className='column'
        src={Image1}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at augue lectus. Vestibulum congue dui at elit tempor, ut tempor felis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et elit est.
         Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        label= 'Adventure'
        path= './services/post.js'
        />
        <CardItem
        className='column'
        src={Image1}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at augue lectus. Vestibulum congue dui at elit tempor, ut tempor felis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi et elit est.
         Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
        label= 'Adventure'
        path= './services/post.js'
        />

      </div>
    </div>
    <Footer/>
    </>

  );
  
}
 export default Article;