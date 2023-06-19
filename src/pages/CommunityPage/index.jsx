import React, { useState, useEffect } from "react";
import { PostCard } from "../../components";
import { Image, CloudinaryContext } from "cloudinary-react";
import "./styles.css";

import CloudinaryUploadWidget from "../../components/PostForm/CloudinaryUploadWidget";

const CommunityPage = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("http://localhost:3000/posts");
        //add token to header

        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log({ error: error.message });
      }
    };
    getPosts();
  }, []);

  function displayPosts() {
    return (
      <>
        <div className="All-Post">
          AllPosts
          <div className="header">
            <ul>
              <li className="post-navbar">All</li>
              <li className="post-navbar">Posts</li>
              <li className="post-navbar">Questions</li>
              <li className="post-navbar">search</li>
              <li className="post-navbar">+</li>
            </ul>
          </div>
        </div>
        {post.map((p) => (
          <PostCard
            key={p._id}
            _id={p._id}
            user_id={p.user_id}
            title={p.title}
            content={p.content}
            image={p.image}
            comments={p.comments}
            question={p.question}
            createdAt={p.createdAt}
            updatedAt={p.updatedAt}
          />
        ))}
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div>displaying posts: {displayPosts()}</div>
        <CloudinaryContext cloudName="dzbvvdev4">
          <div>
            <Image publicId="sample" width="50" />
          </div>
          <Image publicId="sample" width="0.5" />
        </CloudinaryContext>
        <CloudinaryUploadWidget />
      </div>
    </>
  );
};

export default CommunityPage;
