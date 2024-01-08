import React from "react";
import ReactDOM from "react-dom/client";

function BookComponent(props) {
  return (
    <div className="book_component">
      <p className="book_title">{props.singleBookData.title.toUpperCase()}</p>
      <p className="book_subtitle">
        {props.singleBookData.subtitle.toUpperCase()}
      </p>
      <div className="book_flex">
        <img
          className="book_image"
          src={`/images/${props.singleBookData.image}.jpg`}
        ></img>
        <p className="book_description">{props.singleBookData.description}</p>
        <div className="book_buttons">
          {props.singleBookData.ebook ? (
            <div>
              <a
                className="button"
                href={props.singleBookData.ebook}
                target="blank"
              >
                <button>EBOOK</button>
              </a>
            </div>
          ) : null}
          {props.singleBookData.boxset ? (
            <div>
              <a
                className="button"
                href={props.singleBookData.boxset}
                target="blank"
              >
                <button>BOXSET</button>
              </a>
            </div>
          ) : null}
          {props.singleBookData.audio ? (
            <div>
              <a
                className="button"
                href={props.singleBookData.audio}
                target="blank"
              >
                <button>AUDIOBOOK</button>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default BookComponent;
