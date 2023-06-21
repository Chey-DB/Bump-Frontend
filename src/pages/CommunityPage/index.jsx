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
  const [state, setState] = new useState(post);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("http://localhost:3000/posts");
        //add token to header
        const data = await res.json();
        setPost(data);
        setState(data);
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
  async function filterPost(e) {
    var updatedPost = [...post];

    updatedPost = updatedPost.filter((x) => {
      if (e.target.value === "") {
        console.log(post);
        return post;
      }

      return x.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setState(updatedPost);
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
  async function showAllQuestions() {
    var updatedPost = [...post];
    updatedPost = updatedPost.filter((x) => {
      return x.question == true;
    });

    setState(updatedPost);
  }
  async function showAllPosts() {
    var updatedPost = [...post];
    updatedPost = updatedPost.filter((x) => {
      return x.question == false;
    });

    setState(updatedPost);
  }
  async function showAll() {
    var updatedPost = [...post];
    setState(updatedPost);
  }

  function displayPosts() {
    return (
      <>
        <div className="All-Post">
          <h4 className="filter-and-search">Filter and Search Through Community Posts</h4>
          <div className="container-search-filter">
            <div className="header">
              <ul className="post-nav-list">
                <button onClick={showAll}>All</button>
                <button onClick={showAllPosts}>Post</button>
                <button onClick={showAllQuestions}>Question</button>
                <input
                  type="text"
                  id="search-posts"
                  placeholder="Search Posts..."
                  onChange={filterPost}
                ></input>
                {newPostPopup()}
              </ul>
            </div>
          </div>
        </div>

        {state.map((p) => (
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
            <label className="label-title">Title: </label>
            <input
              type="text"
              id="input-title"
              onChange={(e) => setTitle(e.target.value)}
              required
            ></input>
            <br />
            <label className="label-content">Content: </label>
            <input
              type="text"
              id="input-content"
              onChange={(e) => setContext(e.target.value)}
              required
            ></input>
            <br />
            <label className="label-question">Question: </label>
            <div class="question-checkbox">
              <input
                type="checkbox"
                className="sc-gJwTLC ikxBAC"
                onChange={(e) => setIsQuestion(!isQuestion)}
              ></input>
            </div>
            <br />
            <label className="label-image">Add image: </label>
            <input className="input-image"
              type="file"
              id="input-image"
              accept=".jpg,.png"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            ></input>
            <div className="submit-post">
              <button type="submit"> submit </button>
            </div>
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
        <div>Displaying posts: {displayPosts()}</div>
        <div className="All-post"></div>
        
      </div>
    
    </>
  );
};

export default CommunityPage;
