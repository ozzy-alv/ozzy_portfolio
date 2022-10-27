import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {TiSocialLinkedinCircular} from 'react-icons/ti';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://twitter.com/OzzySoiYo' target='_blank' rel='noreferrer'>
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href='https://www.instagram.com/ozzy.alvarado/' target='_blank' rel='noreferrer'>
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href='https://www.linkedin.com/in/oea1996/' target='_blank' rel='noreferrer'>
        <div>
          <TiSocialLinkedinCircular />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
