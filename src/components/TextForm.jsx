import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    const textBox = document.getElementById("myBox");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
  };

  const handleExtraSpaces = () => {
    const newText = text.trim().split(/\s+/);
    setText(newText.join(" "));
  };

  const handleClearText = () => {
    setText("");
  };

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <h1
        className={`text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        {props.heading}
      </h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter your text here..."
        ></textarea>

        <div className="mt-3 d-flex flex-wrap gap-2">
          <button
            className="btn btn-primary"
            onClick={handleUpClick}
          >
            Convert to Upper Case
          </button>

          <button
            className="btn btn-primary"
            onClick={handleLoClick}
          >
            Convert to Lower Case
          </button>

          <button
            className="btn btn-danger"
            onClick={handleClearText}
          >
            Clear Text
          </button>

          <button
            className="btn btn-success"
            onClick={handleCopy}
          >
            Copy Text
          </button>

          <button
            className="btn btn-secondary"
            onClick={handleExtraSpaces}
          >
            Handle Extra Spaces
          </button>
        </div>
      </div>

      <div
        className={`container mt-4 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h3>Your Text Summary</h3>

        <p>
          <strong>{wordCount}</strong> words and{" "}
          <strong>{text.length}</strong> characters
        </p>

        <p>{0.008 * wordCount} minutes to read</p>

        <h2>Preview</h2>

        <p>
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}