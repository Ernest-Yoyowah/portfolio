import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
    

  return (
    <>
    
    <p className="app__profiles-intro bold-text">Introduction</p>
    <h2 class="head-text"><span>Overview.</span> </h2>


    <div className="app__profile-item-about ">
    <p> I am a software developer specializing in front-end development, with a passion for creating user-friendly and visually stunning websites. Proficient in HTML, CSS, JavaScript, and React. In addition to my front-end skills, I also have experience in back-end development languages such as Python and Node.js, allowing me to build dynamic and interactive web experiences. I stay abreast of the latest industry trends and best practices. I am dedicated to continuous learning and improvement, always seeking new challenges and opportunities to enhance my skills as a software developer.</p>
    </div>

      <h2 className="head-text">Building Seamless <span>Digital Experiences</span> <br />for  <span>Business Advancement</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);