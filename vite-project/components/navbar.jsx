import React from "react";
import ReactDOM from "react-dom/client";
import { Switch, FormControlLabel, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledSwitch = styled(Switch)`
  && {
    transform: scale(1.3);
  }
`;

function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar_left">
        <a className="navbar_link" href="#">
          Nicholas Woode-Smith
        </a>
      </p>
      <div className="navbar_right">
        <FormControlLabel
          control={<StyledSwitch className="KD_switch"></StyledSwitch>}
          label={
            <Typography variant="body2" style={{ fontFamily: "Lora" }}>
              KAT DRUMMOND
            </Typography>
          }
          labelPlacement="top"
        />
        <FormControlLabel
          control={<StyledSwitch className="CG_switch"></StyledSwitch>}
          label={
            <Typography variant="body2" style={{ fontFamily: "Lora" }}>
              CINDY GILES
            </Typography>
          }
          labelPlacement="top"
        />
        <FormControlLabel
          control={<StyledSwitch className="short_story_switch"></StyledSwitch>}
          label={
            <Typography variant="body2" style={{ fontFamily: "Lora" }}>
              SHORT STORIES
            </Typography>
          }
          labelPlacement="top"
        />
      </div>
    </div>
  );
}

export default Navbar;
