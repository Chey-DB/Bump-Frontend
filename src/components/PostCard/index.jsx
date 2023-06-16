import React from "react";
import "../../App";
import "./styles.css";
import CloudinaryUploadWidget from "../PostForm/CloudinaryUploadWidget";
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

  const eachComment = (allComments) => {
    return (
      <>
        {allComments.map((c) => (
          <p>{c}</p>
        ))}
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
