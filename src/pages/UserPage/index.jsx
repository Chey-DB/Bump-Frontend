import React, { useState } from "react";
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
  async function changePic(e) {
    e.preventDefault();
    profilePicture = await createImgUrl();
    setShow(false);
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
