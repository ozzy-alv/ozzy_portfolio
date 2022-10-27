import React, {useState} from 'react';
import {images} from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper';
import {motion} from 'framer-motion';
import {client} from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: formData.message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setFormSubmitted(true);
    });
  };

  return (
    <>
      <motion.div whileInView={{scale: [0, 1]}} transition={{duration: 1}} className='head-text'>
        <img src={images.thanks} alt='' />
      </motion.div>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:ozzyalvarado96@gmail.com' className='p-text' target='_blank' rel='noreferrer'>
            ozzyalvarado96@gmail.com
          </a>
        </div>
      </div>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +1 (347) 301-1338' className='p-text'>
            +1 (347) 301-1338
          </a>
        </div>
      </div>

      {!formSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input type='text' className='p-text' placeholder='Your Name' value={name} onChange={handleChangeInput} name='name' />
          </div>
          <div className='app__flex'>
            <input type='email' className='p-text' placeholder='Your Email' value={email} onChange={handleChangeInput} name='email' />
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name='message' onChange={handleChangeInput}></textarea>
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for contacting me!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
