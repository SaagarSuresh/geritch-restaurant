import React from 'react';

import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__image' />
        <p className="p__opensans">Our menu is a tribute to the culinary traditions that have made Germany famous. Each dish is a symphony of taste, prepared with the finest locally sourced ingredients and a commitment to time-honored recipes. From our iconic schnitzels and sausages to the hearty stews and delicate pastries, every bite is a celebration of Germany's gastronomic heritage.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__image' />
        <p className="p__opensans">Gericht has a rich and storied history that spans several decades. Established in 1972, our restaurant has been a beloved fixture in the community, known for its commitment to authentic cuisine and warm hospitality. Over the years, we've taken diners on a culinary journey through the heart of Germany, preserving age-old recipes while infusing them with modern flair.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
