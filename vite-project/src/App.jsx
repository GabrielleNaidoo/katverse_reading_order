import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "/components/header.jsx";
import BookComponent from "/components/book.jsx";
import bookData from "/data.js";
import { Switch, FormControlLabel, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledSwitch = styled(Switch)`
  && {
    transform: scale(1.3);
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
              <Typography variant="body2" style={{ fontFamily: "Lora" }}>
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
              <Typography variant="body2" style={{ fontFamily: "Lora" }}>
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
              <Typography variant="body2" style={{ fontFamily: "Lora" }}>
                SHORT STORIES
              </Typography>
            }
            labelPlacement="top"
          />
        </div>
      </div>
      <Header />
      <div className="box">
        <div className="books_container">{books}</div>
      </div>
    </>
  );
}

export default App;
