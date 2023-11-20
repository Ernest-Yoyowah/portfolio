// Education.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Education.scss";

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';

    client.fetch(query).then((data) => {
      setEducations(data);
    });
  }, []);

  return (
    <>
      <div className="app__education-container">
        <motion.div className="app__education-list">
          <h2 className="head-text_edu">Education</h2>
          {educations.map((education) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__education-item"
              key={education.institution}
            >
              <div className="app__flex">
                {education.icon && (
                  <img
                    src={urlFor(education.icon).url()}
                    alt={education.institution}
                  />
                )}
              </div>
              <div className="app__education-details">
                <h3>{education.institution}</h3>
                <p>{`Degree: ${education.degree}`}</p>
                <p>{`Year: ${education.year}`}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Education, "app__education"),
  "education",
  "app__whitebg"
);
