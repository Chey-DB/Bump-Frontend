import React, { useState } from "react";

import GlobalModal from "../GlobalModal";

import "./CommuntiySearchFilter.css";
import { useAuth } from "../../Context";

const CommunitySearchFilter = ({
  showAll,
  showAllPosts,
  showAllQuestions,
  filterPost,
  show,
  setShow,
  isQuestion,
  setIsQuestion,
}) => {
  const { user } = useAuth();
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  function newPostPopup() {
    async function addPost(imgUrl) {
      const options = {
        user_id: user.userId,
        title: title,
        content: context,
        image: imgUrl,
        comments: [],
        question: isQuestion,
      };
      console.log(options);
      try {
        //post method
        const res = await fetch("http://localhost:3000/posts", {
          method: "POST",
          body: JSON.stringify(options),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("returnd data now");
        const data = await res.json();

        console.log("returnd data: ", data);
      } catch (error) {
        console.log("opsie");
        console.log(error);
      }
      return <>{console.log("done")}</>;
    }
    async function handleSubmit(e) {
      e.preventDefault();
      const imgUrl = await createImgUrl();
      console.log(imgUrl);
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

    return (
      <>
        <a className="primary-btn" id="plus" onClick={() => setShow(true)}>
          +
        </a>
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
            <div className="question-checkbox">
              <label className="label-question"></label>
              <div className="question-checkbox">
                <input
                  type="checkbox"
                  className="sc-gJwTLC ikxBAC"
                  onChange={(e) => setIsQuestion(!isQuestion)}
                ></input>
              </div>
              <br />
              <label className="label-image">Add image: </label>
              <input
                className="input-image"
                type="file"
                id="input-image"
                accept=".jpg,.png"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              ></input>
              <div className="submit-post">
                <button id="modal-submit" type="submit">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
            <br />
          </form>
        </GlobalModal>
      </>
    );
  }

  return (
    <div className="filter-and-search-wrapper">
      <h4>Filter and Search Through Community Posts and Questions</h4>
      <div className="cm-search-filter-holder">
        <input
          type="text"
          id="search-posts"
          placeholder="Search..."
          onChange={filterPost}
        ></input>
        <div>
          <a className="primary-btn primary-btn-green" onClick={showAll}>
            All
          </a>
          <a className="primary-btn primary-btn-green" onClick={showAllPosts}>
            Post
          </a>
          <a
            className="primary-btn primary-btn-green"
            onClick={showAllQuestions}
          >
            Question
          </a>
          {newPostPopup()}
        </div>
      </div>
    </div>
  );
};

export default CommunitySearchFilter;
