import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { client } from "../../client";
import "./BlogPage.scss";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.fetch('*[_type == "post"]');
        setPosts(response);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-page app__whitebg">
      <nav className="blog-navbar">
        <div className="app__blog">
          <Link to="/" className="p-text">
            Home
          </Link>
          <Link to="https://github.com/Ernest-Yoyowah" className="p-text">
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/ernestyoyowah/"
            className="p-text"
          >
            LinkedIn
          </Link>
        </div>
      </nav>

      <div className="blog-pageM">
        <h2 className="blog-header">Read My Blog</h2>
        <div className="blog-posts-container">
          {posts.map((post) => (
            <motion.div
              key={post._id}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="blog-post"
            >
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-meta">
                <span className="blog-post-author">Author: {post.author}</span>
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
  );
};

export default BlogPage;
