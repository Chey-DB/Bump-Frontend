import React, { useState } from "react";
import "../../App";
import "./styles.css";
const PostCard = ({
  id,
  user_id,
  title,
  content,
  image,
  comments,
  question,
  createdAt,
  updatedAt,
}) => {
  const [newComment, setNewComment] = useState("");

  const post = () => {
    if (image != "" && question == false) {
      return (
        <div className="card">
          <div className="user-data">
            <button>profile</button>
            <div>user_id: {user_id}</div>

            <div>createdAt: {createdAt}</div>
          </div>
          <div className="title">title: {title}</div>
          <img src={image} className="img"></img>
          <div className="content">content: {content}</div>
          <div className="comment">comments: {eachComment(comments)}</div>
        </div>
      );
    } else if (image === "" && question == false) {
      return (
        <div className="card">
          <div className="user-data">
            <button>profile</button>
            <div>user_id: {user_id}</div>
            <div className="p-title">title: {title}</div>
            <div>createdAt: {createdAt}</div>
          </div>
          <div className="content">content: {content}</div>
          <div className="comment">comments: {eachComment(comments)}</div>
        </div>
      );
    }
  };

  const questions = () => {
    if (question == true) {
      return (
        <div className="card">
          <div className="user-data">
            <button>profile</button>
            <div className="q-name">user_id: {user_id}</div>
            <div className="title">title: {title}</div>
            <div className="q-date">createdAt: {createdAt}</div>
          </div>
          <div className="content">content: {content}</div>
          <div className="comment">comments: {eachComment(comments)}</div>
        </div>
      );
    }
  };
  async function handleSubmit() {
    console.log("handling the submit");
    const options = {
      _id: id,
      username: "palceholder for person logged in",
      comment: newComment,
    };
    try {
      const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const eachComment = () => {
    return (
      <>
        {comments.map((c) => (
          <p>
            {c[0]} --gap that only works on 2d array-- {c[1]}
          </p>
        ))}
        <input
          type="text"
          onChange={(e) => setNewComment(e.target.value)}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </>
    );
  };

  return (
    <>
      <div className="All-Post">
        {questions()}
        {post()}
      </div>
    </>
  );
};
export default PostCard;
