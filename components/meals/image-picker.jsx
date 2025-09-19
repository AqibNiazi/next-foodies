"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, id, name }) => {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState(null);
  const handlePickClick = () => {
    imageInput.current.click();
  };
  const handlePickedImage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={id}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image selected by the user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={id}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handlePickedImage}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          {" "}
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
