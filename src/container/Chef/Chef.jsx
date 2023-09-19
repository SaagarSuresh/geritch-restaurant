import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Our signature dish, the Wiener Schnitzel, is a labor of love that reflects our commitment to using the freshest, locally sourced ingredients.</p>
        </div>
        <p className="p__opensans"> It's a harmonious blend of flavors and textures that will take your taste buds on a journey through German Cuisine. The secret to its exquisite taste lies in the slow simmering of our house-made sauces and the careful balance of herbs and spices. We're proud to share this culinary masterpiece with you and hope it brings as much joy to your palate as it does to ours.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
