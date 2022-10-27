import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.85 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>✨</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hi! you're in the sky with...</p>
            <h1 className="head-text"> Ozzy</h1>
          </div>
        </div>
        <div className="tag-cmp app__flex">
          <p className="p-text"> Web Developer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.ozzy} alt="" className="profile_bg app_profile" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />

      <motion.svg
        width="511"
        height="511"
        viewBox="0 0 511 511"
        fill="none"
        initial="hidden"
        animate="visible"
        className="overlay_circle"
      >
        <motion.circle
          cx="255.5"
          cy="255.5"
          r="255.5"
          stroke="rgba(255, 121, 0, 0.5)"
          variants={draw}
          custom={1}
        />
      </motion.svg>
    </motion.div>

    <motion.div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.85 }}
      className="app__header-info"
      style={{ marginTop: -90 }}
    >
      <div className="app__header-badge">
        <div className="badge-cmp app-flex">
          <div style={{ marginRight: 20 }}>
            <p className="p-text-two">Let's explore some more!</p>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      style={{ marginTop: 50 }}
    >
      {[images.next, images.node, images.redux, images.react].map(
        (circle, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.85 }}
            className="circle-cmp app__flex"
            key={`circle-${index}`}
          >
            <img src={circle} alt="profile_bg" />
          </motion.div>
        ),
      )}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
