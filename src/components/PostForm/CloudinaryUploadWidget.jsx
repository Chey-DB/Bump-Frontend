import React, { Component } from "react";

export default class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    const cloudName = "hzxyensd5"; // replace with your own cloud name
    const uploadPreset = "aoh4fpwm"; // replace with your own upload preset

    // Remove the comments from the code below to add
    // additional functionality.
    // Note that these are only a few examples, to see
    // the full list of possible parameters that you
    // can add see:
    //   https://cloudinary.com/documentation/upload_widget_reference

    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        multiple: false,
      },
      (error, result) => {
        //no error and succesfully upload the image
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info.secure_url);
          let secure_url = result.info.secure_url;
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload Post Image
      </button>
    );
  }
}
