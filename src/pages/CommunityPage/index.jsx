import React, { useState, useEffect } from "react";
import { PostCard } from "../../components";
import { Image, CloudinaryContext } from "cloudinary-react";
import "./styles.css";

import { GlobalModal, CommunitySearchFilter } from "../../components";
import { useAuth } from "../../Context";
//create image function to get a url for the image once its amde

const CommunityPage = () => {
  const [post, setPost] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isQuestion, setIsQuestion] = useState(false);
  const [state, setState] = new useState(post);
  const { user } = useAuth();

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

  return (
    <>
      <div className="container">
        <CommunitySearchFilter
          showAll={showAll}
          showAllPosts={showAllPosts}
          showAllQuestions={showAllQuestions}
          filterPost={filterPost}
          show={show}
          setShow={setShow}
          setTitle={setTitle}
          setContext={setContext}
          isQuestion={isQuestion}
          setIsQuestion={setIsQuestion}
        />
        <div>
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
        </div>
        {/* <div className="All-post"></div> */}
      </div>
    </>
  );
};

export default CommunityPage;
