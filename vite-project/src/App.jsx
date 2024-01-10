import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "/components/header.jsx";
import BookComponent from "/components/book.jsx";
import bookData from "/data.js";
import { Button, Switch, FormControlLabel, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "@emotion/styled";

const StyledSwitch = styled(Switch)`
  && {
    transform: scale(1.3);
  }
  @media only screen and (min-width: 375px) and (max-width: 600px) {
    && {
      transform: scale(1.12);
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #444;
    border-radius: 0.3rem;
    border: 0.5px solid #fff;
  }
`;
const StyledArrowUpwardIcon = styled(ArrowUpwardIcon)`
  && {
    color: #ffffff;
    height: 4rem;
  }
`;

function App() {
  const [state, setState] = useState({
    KD: true,
    CG: true,
    shortStories: true,
  });

  function handleState(event) {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  }

  const books = bookData.map((book) => {
    if (state[book.category] === true) {
      return <BookComponent key={book.title} singleBookData={book} />;
    }
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  function scrollToTopHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="navbar">
        <p className="navbar_left">
          <a className="navbar_link" href="#">
            Nicholas Woode-Smith
          </a>
        </p>
        <div className="navbar_right">
          <FormControlLabel
            control={
              <StyledSwitch
                className="KD_switch"
                name="KD"
                checked={state.KD}
                onChange={handleState}
              ></StyledSwitch>
            }
            label={
              <Typography
                className="switch_label"
                variant="body2"
                style={{ fontFamily: "Lora" }}
              >
                KAT DRUMMOND
              </Typography>
            }
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <StyledSwitch
                className="CG_switch"
                name="CG"
                checked={state.CG}
                onChange={handleState}
              ></StyledSwitch>
            }
            label={
              <Typography
                className="switch_label"
                variant="body2"
                style={{
                  fontFamily: "Lora",
                }}
              >
                CINDY GILES
              </Typography>
            }
            labelPlacement="top"
          />
          <FormControlLabel
            control={
              <StyledSwitch
                className="short_story_switch"
                name="shortStories"
                checked={state.shortStories}
                onChange={handleState}
              ></StyledSwitch>
            }
            label={
              <Typography
                className="switch_label"
                variant="body2"
                style={{ fontFamily: "Lora" }}
              >
                SHORT STORIES
              </Typography>
            }
            labelPlacement="top"
          />
        </div>
      </div>
      <Header />
      <div className="box">
        <div className="books_container">
          {!state.KD && !state.CG && !state.shortStories && (
            <div className="default_text">
              Oopsie! The gremlins have stolen all the books in the Katverse.
              Quickly select one of the amazing Katverse Series above to save
              the world from another Cataclysm.
            </div>
          )}
          {books}
        </div>
      </div>
      <div className="back_to_top">
        <StyledButton onClick={scrollToTopHandler}>
          <StyledArrowUpwardIcon className="arrow_icon" />
        </StyledButton>
      </div>
    </>
  );
}

export default App;
