// BlogPage.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { client } from "../../client";
import "./BlogPage.scss";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import { images } from "../../constants";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.fetch('*[_type == "post"]');
        setPosts(response);
        setFilteredPosts(response);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    if (item === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.tags.includes(item)));
    }
  };

  return (
    <div className="blog-page app__whitebg">
      <nav className="blog-navbar">
        <a className="app__navbar-logo" href="/">
          <img src={images.navLogo} alt="logo" />
        </a>
        <div className="app__blog">
          <Link to="/">Home</Link>
          <Link to="https://github.com/Ernest-Yoyowah">GitHub</Link>
          <Link to="https://www.linkedin.com/in/ernestyoyowah/">LinkedIn</Link>
        </div>

        <div className="app__navbar-menu">
          <HiOutlineMenu onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [200, 0] }} /*Updated from 300 */
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <li className="app__block p-text">
                  <Link to="/">Home</Link>
                  <Link to="https://github.com/Ernest-Yoyowah">GitHub</Link>
                  <Link to="https://www.linkedin.com/in/ernestyoyowah/">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>

      <div className="blog-pageM">
        <div className="main-page">
          <h2 className="blog-header">
            <span className="blog-header-tag">Blog</span>
          </h2>

          {/* Filter Section */}
          <div className="app__work-filter">
            {["UI/UX", "Web Dev", "College", "React JS", "All"].map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`app__work-filter-item app__flex p-text ${
                    activeFilter === item ? "item-active" : ""
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>

          {/* Blog Posts */}
          <div className="blog-posts-container">
            {filteredPosts.map((post) => (
              <motion.div
                key={post._id}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="blog-post"
              >
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-meta">
                  <span className="blog-post-author">
                    Author: {post.author}
                  </span>
                  <span className="blog-post-date">
                    Published on:{" "}
                    {new Date(post.publishDate).toLocaleDateString()}
                  </span>
                </p>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post._id}`} className="blog-post-link">
                  Read more
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
