import { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  && {
    color: #fff;
    border: 1px solid #fff;
    padding: 1rem 4rem;
    transform: scale(1);
    opacity: 1;
  }

  :hover {
    transform: scale(1.1);
  }

  @media only screen and (min-width: 375px) and (max-width: 600px) {
    && {
      padding: 0.2rem 0.5rem;
      font-size: 0.8rem;
    }
    :hover {
      transform: scale(1.02);
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 800px) {
    && {
      padding: 0.3rem 1.2rem;
      font-size: 1rem;
    }
    :hover {
      transform: scale(1.02);
    }
  }
  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    && {
      padding: 0.5rem 2rem;
      font-size: 1.2rem;
    }
    :hover {
      transform: scale(1.02);
    }
  }
`;

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
                <StyledButton variant="outlined">EBOOK</StyledButton>
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
                <StyledButton variant="outlined">BOXSET</StyledButton>
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
                <StyledButton variant="outlined">AUDIOBOOK</StyledButton>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default BookComponent;
