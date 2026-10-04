import React from "react";

export default function About(props) {
  const textColor = props.mode === "dark" ? "light" : "dark";

  return (
    <div className="container my-5">
      <h2 className={`mb-4 text-${textColor}`}>About Us</h2>

      <div className="accordion" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#one"
            >
              What is TextUtils?
            </button>
          </h2>

          <div
            id="one"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a simple React app for analyzing and managing text.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#two"
            >
              What can TextUtils do?
            </button>
          </h2>

          <div
            id="two"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It can count words and characters, calculate reading time, and
              preview text.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#three"
            >
              Does it support Dark Mode?
            </button>
          </h2>

          <div
            id="three"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, TextUtils supports both Light Mode and Dark Mode.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}