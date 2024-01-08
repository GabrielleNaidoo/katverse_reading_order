import React from "react";
import ReactDOM from "react-dom/client";

function BookComponent() {
  return (
    <div className="book_component">
      <p className="book_title"></p>
      <p className="book_subtitle"></p>
      <div className="book_flex">
        <img className="bookImage"></img>
        <p className="book_description"></p>
        <div className="book_buttons"></div>
      </div>
    </div>
  );
}
