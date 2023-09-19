import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>Experience the finest German cuisine at Gericht. Our charming Bavarian-inspired setting welcomes you to indulge in traditional dishes prepared with the utmost care and authenticity. From classic schnitzels to hearty stews, each bite embodies Germany's culinary heritage. Complement your meal with a selection of German beers. Whether for a family gathering or a romantic dinner, Gericht promises an unforgettable taste of Germany's culinary excellence. Prost!</p>
      <button type='button' className='custom__button'><a href="#menu">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
