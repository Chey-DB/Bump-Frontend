import React from "react";
import "../../App";
import "./styles.css";

const PostCard = ({
  _id,
  user_id,
  title,
  content,
  image,
  comments,
  question,
  createdAt,
  updatedAt,
}) => {
  const post = () => {
    if (image != "" && question == false) {
      return (
        <div className="data">
          <p>user_id: {user_id}</p>
          <p>title: {title}</p>
          <p>content: {content}</p>
          <img src={image}></img>
          <p>comments: {comments}</p>
          <p>question: {question.toString()}</p>
          <p>createdAt: {createdAt}</p>
          <p>updatedAt: {updatedAt}</p>
        </div>
      );
    } else if (image === "" && question == false) {
      return (
        <div className="data">
          <p>user_id: {user_id}</p>
          <p>title: {title}</p>
          <p>content: {content}</p>
          <p>comments: {comments}</p>
          <p>question: {question.toString()}</p>
          <p>createdAt: {createdAt}</p>
          <p>updatedAt: {updatedAt}</p>
        </div>
      );
    }
  };

  const questions = () => {
    if (question == true) {
      return (
        <div className="card">
          <div className="user-data">
            z <button>profile</button>
            <div>user_id: {user_id}</div>
            <div className="q-title">title: {title}</div>
            <div>createdAt: {createdAt}</div>
          </div>

          <div className="q-content">content: {content}</div>
          <div className="q-comment">comments: {comments}</div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="All-Post">
        {questions()}
        {/* {post()} */}
      </div>
    </>
  );
};
export default PostCard;
