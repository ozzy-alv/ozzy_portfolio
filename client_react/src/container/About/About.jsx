import React, {useState, useEffect} from 'react';
import {motion, useMotionValue} from 'framer-motion';
import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import {images} from '../../constants';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  const x = useMotionValue(0);
  return (
    <>
      <motion.div animate={{scale: [0, 1.1]}} whileInView={{scale: [0, 1]}} transition={{duration: 1}} style={{x}} className='app__head-image'>
        <img src={images.great} alt='phrase-img' />
      </motion.div>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div whileInView={{opacity: 1}} whileHover={{scale: 1.1}} transition={{duration: 0.5, type: 'tween'}} className='app__profiles-item' key={about.title + index}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>
              {about.title}
            </h2>
            <p className='p-text-two'>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
