import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

import { BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import emailjs from '@emailjs/browser';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    emailjs.send(
      'service_7dwhw2e',
      'template_jz1c48t',
      {
        from_name: formData.name,
        to_name: 'Ernest Nii Okpoti Yoyowah',
        from_email: formData.email,
        to_email: 'ernestniiyoyowah@gmail.com',
        message: formData.message,
      },
      'Vd0tZePXYFCoCiL13'
    );

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Contact Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ernestniiyoyowah@gmail.com" className="p-text">ernestniiyoyowah@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+233 50-692-3484" className="p-text">+233 50-692-3484</a>
        </div>
        <div className="app__footer-card">
          <img src={images.cv} alt="resume" />
          <a href={process.env.PUBLIC_URL + "/resume.pdf"} download className="p-text">Download Resume</a>
        </div>

      </div>

        <div className='app__footer-card-med'>
          <div>
              <a href="https://www.instagram.com/ernest_yoyowah_jnr"><BsInstagram/></a>
          </div>
          <div>
              <a href="https://github.com/Ernest-Yoyowah"><FaGithub/></a>
          </div>
          <div>
              <a href="https://www.linkedin.com/in/ernest-yoyowah-4bb514240"><FaLinkedin/></a>
          </div>
        </div>


      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} required/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);