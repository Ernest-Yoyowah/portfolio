import React, { useState } from "react";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <Link to="/" className="app__navbar-logo">
        <img src={images.navLogo} alt="logo" />
      </Link>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact", "Blog"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            {item === "Blog" ? (
              <Link to="/blog">{item}</Link>
            ) : (
              <Link to={`#${item}`}>{item}</Link>
            )}
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiOutlineMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }} /*Updated from 300 */
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact", "Blog"].map(
                (item) => (
                  <li key={item}>
                    {item === "Blog" ? (
                      <Link to="/blog" onClick={() => setToggle(false)}>
                        {item}
                      </Link>
                    ) : (
                      <Link to={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </Link>
                    )}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
