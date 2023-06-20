import React, { useState, useEffect } from "react";
import { PostCard } from "../../components";
import { Image, CloudinaryContext } from "cloudinary-react";
import "./styles.css";

import GlobalModal from "../../components/GlobalModal";
//create image function to get a url for the image once its amde

const CommunityPage = () => {
  const [post, setPost] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isQuestion, setIsQuestion] = useState(false);

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

  async function handleSubmit(e) {
    e.preventDefault();
    const imgUrl = await createImgUrl();
    console.log(addPost(imgUrl));
    setShow(false);
  }

  async function createImgUrl() {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("cloud_name", "dzbvvdev4");
    formData.append("upload_preset", "bumpPosts");
    console.log("creating image");
    try {
      //post method
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dzbvvdev4/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const data = await res.json();
      //return a url
      return data.secure_url;
    } catch (error) {
      console.log(error);
    }
  }

  function displayPosts() {
    return (
      <>
        <div className="All-Post">
          AllPosts
          <div className="header">
            <ul className="post-nav-list">
              <li className="post-navbar">All</li>
              <li className="post-navbar">Posts</li>
              <li className="post-navbar">Questions</li>
              <li className="post-navbar">search</li>
              {newPostPopup()}
            </ul>
          </div>
        </div>
        {post.map((p) => (
          <PostCard
            key={p._id}
            id={p._id}
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

  function newPostPopup() {
    return (
      <>
        <button className="new-Post" onClick={() => setShow(true)}>
          +
        </button>
        <GlobalModal
          title="Create new post here"
          show={show}
          onClose={() => setShow(false)}
        >
          <form onSubmit={handleSubmit}>
            <label className="label-title">title: </label>
            <input
              type="text"
              id="input-title"
              onChange={(e) => setTitle(e.target.value)}
              required
            ></input>
            <br />
            <label className="label-content">content: </label>
            <input
              type="text"
              id="input-content"
              onChange={(e) => setContext(e.target.value)}
              required
            ></input>
            <br />
            <label className="label-question">question: </label>
            <div class="question-checkbox">
              <input
                type="checkbox"
                className="sc-gJwTLC ikxBAC"
                onChange={(e) => setIsQuestion(!isQuestion)}
              ></input>
            </div>
            <br />
            <label className="label-image">image: </label>
            <input
              type="file"
              id="input-image"
              accept=".jpg,.png"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            ></input>
            <button type="submit"> submit </button>
            <br />
          </form>
        </GlobalModal>
      </>
    );
  }
  async function addPost(imgUrl) {
    const options = {
      user_id: "cghange this when possible",
      title: title,
      content: context,
      image: imgUrl,
      comments: [],
      question: isQuestion,
    };
    try {
      //post method
      const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setPost((xData) => [...xData, data]);
    } catch (error) {
      console.log(error);
    }
    return <>{console.log("done")}</>;
  }

  return (
    <>
      <div className="container">
        <div>displaying posts: {displayPosts()}</div>
      </div>
    </>
  );
};

export default CommunityPage;
