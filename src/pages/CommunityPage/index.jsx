import React, { useState, useEffect } from "react";
import { PostCard } from "../../components";
import { Image, CloudinaryContext } from "cloudinary-react";
import "./styles.css";
import Popup from "reactjs-popup";
import Axios from "axios";
import CloudinaryUploadWidget from "../../components/PostForm/CloudinaryUploadWidget";

//create image function to get a url for the image once its amde
async function createImgUrl(img) {
  const formData = new FormData();
  formData.append("file", img);
  formData.append("cloud_name", "dzbvvdev4");
  formData.append("upload_preset", "bumpPosts");

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
    function addPost() {
      return <>{console.log("Hi")}</>;
    }
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
              <Popup
                trigger={<button className="button"> + </button>}
                model
                nested
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> New Post </div>
                    <form>
                      <label className="label-title">title: </label>
                      <input type="text" id="input-title"></input>
                      <br />
                      <label className="label-content">content: </label>
                      <input type="text" id="input-content"></input>
                      <br />
                      <label className="label-image">image: </label>
                      <input
                        type="file"
                        id="input-image"
                        accept=".jpg,.png"
                      ></input>

                      <br />
                      <label className="label-question">question: </label>
                      <input type="text" id="input-question"></input>
                      <br />
                    </form>
                    <div className="actions">
                      <button
                        className="button"
                        onClick={async () => {
                          const img_url = await createImgUrl(
                            document.getElementById("input-image").files[0]
                          );

                          const data = {
                            user_id: "getting this from somewhere",
                            title: document.getElementById("input-title").value,
                            content:
                              document.getElementById("input-content").value,
                            image: img_url,
                            comments: [],
                            question:
                              document.getElementById("input-question").value,
                          };
                          {
                            console.log(data);
                          }
                          console.log("modal closed ");
                          close();
                        }}
                      >
                        Create Post
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
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
  return (
    <>
      <CloudinaryUploadWidget />
      <div className="container">
        <div>displaying posts: {displayPosts()}</div>
        <CloudinaryContext cloudName="dzbvvdev4">
          <div>
            <Image publicId="sample" width="50" />
          </div>
          <Image publicId="sample" width="0.5" />
        </CloudinaryContext>
      </div>
    </>
  );
};

export default CommunityPage;
