import React, { useState, useEffect } from "react";
import "./../../styles/card.scss";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    console.log(isFlipped);
  }, [isFlipped]);

  const flipHandler = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card-container${isFlipped ? " flipped" : ""}`}
      onClick={flipHandler}
    >
      <Front />
      <Back />
    </div>
  );
};

const Front = () => {
  return (
    <div className="front">
      <ImageArea />
      <MainArea />
    </div>
  );
};

const Back = () => {
  return (
    <div className="back">
      <p>Some sample text to demonstrate how these cards will work.</p>
    </div>
  );
};

const ImageArea = () => {
  return (
    <div className="image-container">
      <img
        className="card-image"
        src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"
        alt="pinkness"
      ></img>
    </div>
  );
};

const MainArea = () => {
  return (
    <div className="main-area">
      <p className="content">
        Some sample text to demonstrate how these cards will work
      </p>
    </div>
  );
};

export default Card;
