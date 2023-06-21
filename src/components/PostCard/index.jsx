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

  const formatTimeElapsed = () => {
    const currentTime = new Date();
    const creationTime = new Date(createdAt);
    const timeDifference = currentTime - creationTime;
    const hoursElapsed = Math.floor(timeDifference / (1000 * 60 * 60));

    if (hoursElapsed === 0) {
      return "Less than an hour ago";
    } else if (hoursElapsed === 1) {
      return "1 hour ago";
    } else {
      return `${hoursElapsed} hours ago`;
    }
  };

  const post = () => {
    if (image !== "" && !question) {
      return (
        <div className="card">
          <div className="user-data">
            <button className="profile-button">profile</button>
            {/* <div>user_id: {user_id}</div> */}

            <div>Time created: {formatTimeElapsed()}</div>
          </div>
          <div className="title -content">
            <div className="title">title: {title}</div>
            <div className="content">content: {content}</div>
          </div>
          <img src={image} className="img"></img>
          <div className="comment">Comments: {eachComment(comments)}</div>
        </div>
      );
    } else if (image === "" && !question) {
      return (
        <div className="card">
          <div className="user-data">
            <button className="profile-button">profile</button>
            {/* <div>user_id: {user_id}</div> */}
            <div>Time created: {formatTimeElapsed()}</div>
          </div>
          <div className="title-content">
            <div className="p-title">Title: {title}</div>
            <div className="content">Content: {content}</div>
          </div>
          <div className="comment">Comments: {eachComment(comments)}</div>
        </div>
      );
    }
  };

  const questions = () => {
    if (question) {
      return (
        <div className="card">
          <div className="user-data">
            <button className="profile-button">profile</button>
            {/* <div className="q-name">user_id: {user_id}</div> */}
            <div className="q-date">Time created: {formatTimeElapsed()}</div>
          </div>
          <div className="title-content">
            <div className="title">Title: {title}</div>
            <div className="content">Content: {content}</div>
          </div>
          <div className="comment">Comments: {eachComment(comments)}</div>
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
            <b>{c[0]}</b> : {c[1]}
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
