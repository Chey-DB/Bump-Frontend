import React, { useState, uesEffect } from "react";
import { SettingsForm, UserInformation, LoggedNav } from "../../components";
import "./styles.css";
import GlobalModal from "../../components/GlobalModal";
let profilePicture = localStorage.getItem("profilePicture");

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFormSubmit = (data) => {
    setUserData(data);
  };
  async function createImgUrl() {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("cloud_name", "dzbvvdev4");
    formData.append("upload_preset", "bumpPosts");
    console.log("creating image");
    console.log(user.userId);
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

  async function updatePFP(profilePicture) {
    const data = {
      profilePic: profilePicture,
    };
    try {
      //post method

      const resLocal = await fetch(
        `http://localhost:3000/local-users/${user.userId}`
      );
      const localData = await resLocal.json();
      //return a url
      if (!localData) {
        const resGoogle = await fetch(
          `http://localhost:3000/google-users/${user.userId}`
        );
        const googleData = await resGoogle.json();
        if (googleData) {
          const googlePFP = await fetch(
            `http://localhost:3000/google-users/${user.userId}`,
            {
              method: "PATCH",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const reGetGoogle = await fetch(
            `http://localhost:3000/google-users/${user.userId}`
          );
          const patchGoogle = await reGetGoogle.json();
          return patchGoogle.profilePic;
        }
      } else {
        const localPFP = await fetch(
          `http://localhost:3000/local-users/${user.userId}`,
          {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const reGetLocal = await fetch(
          `http://localhost:3000/local-users/${user.userId}`
        );
        const patchLocal = await reGetLocal.json();
        return patchLocal.profilePic;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container">
      <div className="pic-form">
        <div>
          <img
            id="picture"
            src={profilePicture ? profilePicture : "blank-profile-picture.webp"}
            alt="profile picture"
            onClick={() => setShow(true)}
          />
        </div>
        <GlobalModal
          title="insert a new profile picture here"
          show={show}
          onClose={() => setShow(false)}
        >
          <input
            type="file"
            id="input-image"
            accept=".jpg,.png"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          ></input>
          <button type="submit" onClick={changePic}>
            submit
          </button>
        </GlobalModal>
        <SettingsForm onFormSubmit={handleFormSubmit} />
        {userData && <UserInformation userData={userData} />}
      </div>
    </div>
  );
};

export default UserPage;
