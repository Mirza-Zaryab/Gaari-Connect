import React, { useState } from "react";
import ReactDOM from "react-dom";
import MultiImageInput from "react-multiple-image-input";
import "./styles.css";

export default function App() {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100"
  };

  const [images, setImages] = useState({});

  return (
    <MultiImageInput
      images={images}
      setImages={setImages}
      allowCrop={false}
      theme={"light"}
      cropConfig={{ crop, ruleOfThirds: true }}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);