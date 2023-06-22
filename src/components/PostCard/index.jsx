import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context";
import "../../App";
import "./styles.css";
import CommentIcon from './chat.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostCard = ({ id, title, content, image, comments, question, createdAt, user_id}) => {
  const [newComment, setNewComment] = useState("");
  const [userData, setUserData] = useState("")
  const [showAllComments, setShowAllComments] = useState(false);

  const { user } = useAuth();

  // console.log(comments)

  // console.log(user_id)
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

  // http://localhost:3000/google-users/

  const getUsername = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/google-users/${user_id}`)
      setUserData(res.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getUsername()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      _id: id,
      username: user.username,
      comment: newComment,
    };

    try {
      const res = await fetch("http://localhost:3000/posts/comments", {
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
  };


  const Comment = ({ author, text }) => (
    <div className="each-comment">
      <div className="each-comment-user">
        <img className="comment-icon" src={CommentIcon} alt="commentIcon" />
        <p style={{ textTransform: 'capitalize' }}>{author}:</p>
        <p>{text}</p>
      </div>
    </div>
  );
  
  const regularPost = () => {
  
    const visibleComments = showAllComments ? comments : comments.slice(0, 3);
  
    const handleShowMoreComments = () => {
      setShowAllComments(true);
    };
  
    return (
      <div className="card">
        <div className="user-data-wrapper">
          <img
            src={"blank-profile-picture.webp"}
            alt="profile-picture"
            id="pt-pfp"
            style={{ width: '3.5rem', borderRadius: '100px' }}
          />
          <div className="user-data-holder">
            <p>{userData.username}</p>
            <p>{formatTimeElapsed()}</p>
          </div>
        </div>
        <h2 className="p-title">{title}</h2>
        <div className="pt-content">
          <p className="content">{content}</p>
          {image && (
            <div>
              <img src={image} className="the-image" alt="postImage" />
            </div>
          )}
        </div>
        <div className="comment">
          <p className="comments-header">Comments:</p>
          {comments.length === 0 ? (
            <p className="no-comments">No comments yet</p>
          ) : (
            <>
              {visibleComments.map((c, index) => (
                <Comment key={index} author={c[0]} text={c[1]} />
              ))}
              {!showAllComments && comments.length > 3 && (
                <button
                  className="show-more-comments primary-btn"
                  onClick={handleShowMoreComments}
                  style={{padding:'0.3rem 1rem', fontSize: '0.8rem', marginTop:'1rem'}}
                >
                  Show More
                </button>
              )}
            </>
          )}
          <form onSubmit={handleSubmit}>
            <div className="comment-inputs">
              <input
                type="text"
                id="comment-input"
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
              />
              <button
                type="submit"
                className="primary-btn submit-btn"
                style={{ padding: '0.2rem 1rem' }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  const questionPost = () => {
  
    const visibleComments = showAllComments ? comments : comments.slice(0, 3);
  
    const handleShowMoreComments = () => {
      setShowAllComments(true);
    };
  
    return (
      <div className="card">
        <div className="user-data-wrapper">
          <img
            src={"blank-profile-picture.webp"}
            alt="profile-picture"
            id="pt-pfp"
            style={{ width: '3.5rem', borderRadius: '100px' }}
          />
          <div className="user-data-holder">
            <p>{userData.username}</p>
            <p>{formatTimeElapsed()}</p>
          </div>
        </div>
        <h4>Question:</h4>
        <h2 className="p-title">{title}</h2>
        <div className="pt-content">
          <p className="content">{content}</p>
          {image && (
            <div>
              <img src={image} className="the-image" alt="postImage" />
            </div>
          )}
        </div>
        <div className="comment">
          <p className="comments-header">Answers:</p>
          {comments.length === 0 ? (
            <p className="no-comments">No answers yet</p>
          ) : (
            <>
              {visibleComments.map((c, index) => (
                <Comment key={index} author={c[0]} text={c[1]} />
              ))}
              {!showAllComments && comments.length > 3 && (
                <button
                  className="show-more-comments primary-btn"
                  onClick={handleShowMoreComments}
                  style={{padding:'0.3rem 1rem', fontSize: '0.8rem', marginTop:'1rem'}}
                >
                  Show More
                </button>
              )}
            </>
          )}
          <form onSubmit={handleSubmit}>
            <div className="comment-inputs">
              <input
                type="text"
                id="comment-input"
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
              />
              <button
                type="submit"
                className="primary-btn submit-btn"
                style={{ padding: '0.2rem 1rem' }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      {question ? questionPost() : regularPost()}
    </>
  );
};

export default PostCard;
